/**
 * Registers (or clears) the Telegram webhook so /link works in the group.
 * Run once after deploying, and again if PUBLIC_ORIGIN or the secret changes.
 *
 *   npm run webhook:set     point Telegram at PUBLIC_ORIGIN/api/telegram/webhook
 *   npm run webhook:info    show what Telegram currently thinks
 *   npm run webhook:clear   stop receiving updates
 */
import { config, telegramApi } from './config.js';

const action = process.argv[2] ?? 'set';

async function api(method: string, body?: unknown) {
  const res = await fetch(`${telegramApi}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  return (await res.json()) as { ok: boolean; description?: string; result?: unknown };
}

const url = `${config.publicOrigin}/api/telegram/webhook`;

if (action === 'set') {
  const out = await api('setWebhook', {
    url,
    secret_token: config.webhookSecret,
    allowed_updates: ['message'],
    drop_pending_updates: true,
  });
  console.log(out.ok ? `webhook set -> ${url}` : `FAILED: ${out.description}`);
} else if (action === 'clear') {
  const out = await api('deleteWebhook', { drop_pending_updates: true });
  console.log(out.ok ? 'webhook cleared' : `FAILED: ${out.description}`);
} else {
  const out = await api('getWebhookInfo');
  console.log(JSON.stringify(out.result, null, 2));
}
