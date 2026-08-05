import express from 'express';
import { config } from './config.js';
import { installRouter } from './routes/install.js';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', config.publicOrigin);
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-admin-secret');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
});

app.get('/api/health', (_req, res) => res.json({ ok: true, redirect: config.redirectUrl }));
app.use('/api', installRouter);

app.use((_req, res) => res.status(404).json({ error: 'not found' }));

app.listen(config.port, () => {
  console.log(`Lighting Design API listening on ${config.port}`);
});
