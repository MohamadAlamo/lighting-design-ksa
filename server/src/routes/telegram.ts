import { Router } from 'express';
import { config } from '../config.js';
import { mintToken } from '../tokens.js';
import { replyTo } from '../telegram.js';

/**
 * Lets a salesperson mint a customer link from inside the Telegram group:
 *
 *   /link 0501234567 INV-2026-001
 *
 * The salesperson is taken from who sent the message, not from what they type —
 * Telegram already knows who they are, so the attribution cannot be mistyped or
 * claimed on someone else's behalf.
 */
export const telegramRouter = Router();

interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramUpdate {
  message?: {
    message_id: number;
    text?: string;
    chat: { id: number | string };
    from?: TelegramUser;
  };
}

/** Prefer the display name; fall back to @username, then a bare id. */
function displayName(user?: TelegramUser): string {
  if (!user) return 'Unknown';
  const full = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
  return full || (user.username ? `@${user.username}` : `id:${user.id}`);
}

const USAGE =
  '⚠️ <b>الصيغة غير صحيحة</b>\n' +
  'اكتب: <code>/link [رقم الجوال] [رقم الفاتورة]</code>\n' +
  'مثال: <code>/link 0501234567 INV-2026-001</code>';

telegramRouter.post('/telegram/webhook', async (req, res) => {
  // Telegram echoes the secret from setWebhook. Anything else is not Telegram.
  if (req.header('x-telegram-bot-api-secret-token') !== config.webhookSecret) {
    res.sendStatus(401);
    return;
  }

  // Always 200 quickly — a non-2xx makes Telegram retry the same update.
  res.sendStatus(200);

  const message = (req.body as TelegramUpdate)?.message;
  const text = message?.text?.trim();
  if (!message || !text) return;

  // Only the install group may mint links.
  if (String(message.chat.id) !== String(config.installChatId)) return;

  // Tolerate /link@BotName, which is what Telegram sends in groups.
  const [rawCommand, ...args] = text.split(/\s+/);
  const command = rawCommand.split('@')[0].toLowerCase();
  if (command !== '/link') return;

  try {
    const [phone, ...invoiceParts] = args;
    const invoice = invoiceParts.join(' ').trim();

    if (!phone || !invoice) {
      await replyTo(message.chat.id, USAGE, message.message_id);
      return;
    }

    const salesperson = displayName(message.from);
    const token = await mintToken(salesperson, { phone, invoice });
    const url = `${config.publicOrigin}/form/?t=${token}`;

    await replyTo(
      message.chat.id,
      `✅ <b>رابط جديد</b>\n` +
        `<b>الجوال:</b> ${phone}\n` +
        `<b>الفاتورة:</b> ${invoice}\n` +
        `<b>المندوب:</b> ${salesperson}\n\n` +
        `${url}\n\n` +
        `<i>يُستخدم مرة واحدة فقط. أرسله للعميل عبر واتساب.</i>`,
      message.message_id,
    );
  } catch (error) {
    console.error('[telegram] /link failed', error);
    await replyTo(message.chat.id, '❌ تعذّر إنشاء الرابط. حاول مرة أخرى.', message.message_id).catch(
      () => {},
    );
  }
});
