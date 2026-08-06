import { config, telegramApi } from './config.js';

interface SendPhotoFile {
  buffer: Buffer;
  filename: string;
  mimetype: string;
  caption: string;
}

async function call(method: string, body: string | FormData, headers?: Record<string, string>) {
  const res = await fetch(`${telegramApi}/${method}`, { method: 'POST', body, headers });
  const json = (await res.json()) as { ok: boolean; description?: string };
  if (!json.ok) throw new Error(`Telegram ${method} failed: ${json.description ?? 'unknown error'}`);
  return json;
}

export async function sendMessage(text: string): Promise<void> {
  await call(
    'sendMessage',
    JSON.stringify({
      chat_id: config.installChatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: false,
    }),
    { 'content-type': 'application/json' },
  );
}

/**
 * Reply in the chat a command came from, threaded under it. Kept separate from
 * sendMessage, which always targets the configured install group.
 */
export async function replyTo(
  chatId: number | string,
  text: string,
  replyToMessageId?: number,
): Promise<void> {
  await call(
    'sendMessage',
    JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      ...(replyToMessageId ? { reply_to_message_id: replyToMessageId } : {}),
    }),
    { 'content-type': 'application/json' },
  );
}

export async function sendPhoto(file: SendPhotoFile): Promise<void> {
  const form = new FormData();
  form.append('chat_id', config.installChatId);
  form.append('caption', file.caption);
  form.append(
    'photo',
    new Blob([file.buffer], { type: file.mimetype || 'image/jpeg' }),
    file.filename || 'photo.jpg',
  );
  await call('sendPhoto', form);
}
