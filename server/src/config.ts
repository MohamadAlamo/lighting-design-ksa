import { config as loadEnv } from 'dotenv';
import { dirname, isAbsolute, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** dist/ when built, src/ in dev — the app folder either way. */
const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Load .env by absolute path. `import 'dotenv/config'` reads it relative to the
 * working directory, which under IIS is not the app folder — the API would then
 * start with no config at all and die on the first need() call.
 * Checked next to the app first, then one level up (dist/ builds keep .env in
 * the deploy root beside package.json).
 */
loadEnv({ path: resolve(appDir, '.env') });
loadEnv({ path: resolve(appDir, '..', '.env') });

function storePath(): string {
  const fromEnv = process.env.TOKEN_STORE;
  if (fromEnv) return isAbsolute(fromEnv) ? fromEnv : resolve(appDir, fromEnv);
  return resolve(appDir, 'data', 'tokens.json');
}

function need(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export const config = {
  botToken: need('BOT_TOKEN'),
  installChatId: need('INSTALL_CHAT_ID'),
  adminSecret: need('ADMIN_SECRET'),
  publicOrigin: process.env.PUBLIC_ORIGIN ?? 'http://localhost:5173',
  redirectUrl: process.env.REDIRECT_URL ?? 'https://lightingdesign-ksa.com/',
  port: Number(process.env.PORT ?? 8080),
  tokenStore: storePath(),
  /**
   * Shared with Telegram via setWebhook; it echoes it back in the
   * X-Telegram-Bot-Api-Secret-Token header. Without it the webhook URL is the
   * only thing stopping anyone from posting fake updates, so it is required.
   */
  webhookSecret: need('TELEGRAM_WEBHOOK_SECRET'),
  maxFileBytes: 20 * 1024 * 1024,
} as const;

export const telegramApi = `https://api.telegram.org/bot${config.botToken}`;
