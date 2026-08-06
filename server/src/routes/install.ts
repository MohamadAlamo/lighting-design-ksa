import { Router } from 'express';
import multer from 'multer';
import { randomInt } from 'node:crypto';
import type { InstallSurvey, SubmitResponse } from '../contract.js';
import { config } from '../config.js';
import { consumeToken, inspectToken, mintToken } from '../tokens.js';
import { PHOTO_CAPTIONS, formatInstallReport, formatLegacyReport } from '../format.js';
import { sendMessage, sendPhoto } from '../telegram.js';

/** Photos live in memory only — they go straight to Telegram and are never written to disk. */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxFileBytes, files: 6 },
});

const REQUIRED_TEXT: (keyof InstallSurvey)[] = [
  'fullName',
  'phone',
  'invoice',
  'city',
  'mapUrl',
  'volt',
  'powerPoint',
  'switchKind',
  'ceiling',
  'ceilingHeight',
  'finishingWorks',
  'obstacle',
  'ladderNeeded',
];

const REQUIRED_PHOTOS = ['placePhoto', 'ceilingPhoto', 'powerPhoto'] as const;

/** Field names used by the Arabic form that is already live. */
const LEGACY_PHOTOS = { placePhoto: 'photo_full', ceilingPhoto: 'photo_ceiling', powerPhoto: 'photo_power' } as const;

function reference(): string {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(
    now.getDate(),
  ).padStart(2, '0')}`;
  return `LD-${stamp}-${String(randomInt(100, 999))}`;
}

export const installRouter = Router();

installRouter.get('/token/:token', async (req, res) => {
  const status = await inspectToken(req.params.token);
  // `ok` keeps the already-deployed Arabic form working unchanged.
  res.json({ ...status, ok: status.valid && !status.used });
});

installRouter.post('/token', async (req, res) => {
  if (req.header('x-admin-secret') !== config.adminSecret) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  const salesperson = String(req.body?.salesperson ?? '').trim();
  if (!salesperson) {
    res.status(400).json({ error: 'salesperson required' });
    return;
  }
  // Optional. When present the form prefills them and locks the fields, so the
  // invoice on the report is the one the salesperson quoted, not a retyped one.
  const phone = String(req.body?.phone ?? '').trim() || undefined;
  const invoice = String(req.body?.invoice ?? '').trim() || undefined;
  const token = await mintToken(salesperson, { phone, invoice });
  res.json({ token, url: `${config.publicOrigin}/form/?t=${token}` });
});

installRouter.post(
  '/install',
  upload.fields(
    [...REQUIRED_PHOTOS, ...Object.values(LEGACY_PHOTOS)].map((name) => ({ name, maxCount: 1 })),
  ),
  async (req, res) => {
    const body = req.body as Record<string, string>;
    const files = req.files as Record<string, Express.Multer.File[]> | undefined;

    // The Arabic form reads `msg` and `used`; the typed client reads `error`.
    // Send all three so either surface shows the real reason.
    const fail = (status: number, error: string, used = false) =>
      res.status(status).json({ ok: false, error, msg: error, used } satisfies SubmitResponse);

    const token = body.token || (req.query.t as string) || '';
    if (!token) return fail(400, 'missing token');

    const legacy = typeof body.data === 'string' ? (JSON.parse(body.data) as Record<string, string>) : null;

    const photoOf = (name: (typeof REQUIRED_PHOTOS)[number]) =>
      files?.[name]?.[0] ?? files?.[LEGACY_PHOTOS[name]]?.[0];

    const status = await inspectToken(token);
    if (!status.valid) return fail(403, 'invalid link');
    if (status.used) return fail(403, 'تم إرسال هذا النموذج مسبقًا', true);

    if (!legacy) {
      const missing = REQUIRED_TEXT.filter((key) => !String(body[key] ?? '').trim());
      if (missing.length) return fail(400, `missing fields: ${missing.join(', ')}`);

      if (body.switchKind === 'smart' && !String(body.smartSystem ?? '').trim())
        return fail(400, 'smart system name required');
      if (body.switchKind === 'dimmer' && !String(body.dimmerType ?? '').trim())
        return fail(400, 'dimmer type required');
    }

    const missingPhotos = REQUIRED_PHOTOS.filter((name) => !photoOf(name));
    if (missingPhotos.length) return fail(400, `missing photos: ${missingPhotos.join(', ')}`);

    const ref = reference();
    const report = legacy
      ? formatLegacyReport(legacy, { reference: ref, salesperson: status.salesperson })
      : formatInstallReport({ ...body, confirmed: true } as unknown as InstallSurvey, {
          reference: ref,
          salesperson: status.salesperson,
        });

    try {
      await sendMessage(report);

      for (const name of REQUIRED_PHOTOS) {
        const file = photoOf(name)!;
        await sendPhoto({
          buffer: file.buffer,
          filename: file.originalname,
          mimetype: file.mimetype,
          caption: `${PHOTO_CAPTIONS[name]} · ${ref}`,
        });
      }

      await consumeToken(token);
      res.json({ ok: true, reference: ref } satisfies SubmitResponse);
    } catch (error) {
      console.error('[install] delivery failed', error);
      fail(502, 'could not deliver the form, please try again');
    }
  },
);
