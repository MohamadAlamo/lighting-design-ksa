import { randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { config } from './config.js';

/**
 * Single-use form links. A salesperson mints one per customer; it dies on
 * submit. Stored as a small JSON file — no database, and nothing personal in it.
 */
export interface TokenRecord {
  salesperson: string;
  createdAt: string;
  usedAt?: string;
  /** Supplied by the salesperson when minting; the form prefills them read-only. */
  phone?: string;
  invoice?: string;
}

export interface MintDetails {
  phone?: string;
  invoice?: string;
}

/**
 * Absolute path, never cwd-relative: under IIS the working directory is not the
 * app folder, so a relative path can land somewhere unwritable and silently
 * break every form link. config.tokenStore resolves against this file's own
 * location unless TOKEN_STORE overrides it.
 */
const STORE = config.tokenStore;

async function readStore(): Promise<Record<string, TokenRecord>> {
  try {
    return JSON.parse(await readFile(STORE, 'utf8')) as Record<string, TokenRecord>;
  } catch {
    return {};
  }
}

async function writeStore(data: Record<string, TokenRecord>): Promise<void> {
  await mkdir(dirname(STORE), { recursive: true });
  await writeFile(STORE, JSON.stringify(data, null, 2), 'utf8');
}

export async function mintToken(salesperson: string, details: MintDetails = {}): Promise<string> {
  const token = randomBytes(9).toString('base64url');
  const store = await readStore();
  store[token] = {
    salesperson,
    createdAt: new Date().toISOString(),
    ...(details.phone ? { phone: details.phone } : {}),
    ...(details.invoice ? { invoice: details.invoice } : {}),
  };
  await writeStore(store);
  return token;
}

export async function inspectToken(token: string) {
  const record = (await readStore())[token];
  return {
    valid: Boolean(record),
    used: Boolean(record?.usedAt),
    salesperson: record?.salesperson,
    phone: record?.phone,
    invoice: record?.invoice,
  };
}

export async function consumeToken(token: string): Promise<boolean> {
  const store = await readStore();
  const record = store[token];
  if (!record || record.usedAt) return false;
  record.usedAt = new Date().toISOString();
  await writeStore(store);
  return true;
}
