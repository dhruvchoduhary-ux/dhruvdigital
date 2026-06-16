import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { insertLead, listLeads, getLeadStats } from './db.js';
import { sendLeadEmail } from './email.js';
import { sendLeadWhatsAppMessage } from './whatsapp.js';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(
  cors({
    origin: corsOrigin === '*' ? true : corsOrigin.split(','),
  }),
);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'Dhruv Digital Solutions', time: new Date().toISOString() });
});

app.post('/api/leads', async (req, res) => {
  const {
    fullName,
    companyName,
    email,
    phoneNumber,
    whatsappNumber,
    serviceType,
    budgetRange,
    projectDescription,
  } = req.body || {};

  if (!fullName || !email || !serviceType) {
    return res.status(400).json({
      ok: false,
      message: 'Full name, email, and type of service are required.',
    });
  }

  const leadRecord = {
    full_name: String(fullName).trim(),
    company_name: companyName ? String(companyName).trim() : null,
    email: String(email).trim(),
    phone_number: phoneNumber ? String(phoneNumber).trim() : null,
    whatsapp_number: whatsappNumber ? String(whatsappNumber).trim() : null,
    service_type: String(serviceType).trim(),
    budget_range: budgetRange ? String(budgetRange).trim() : null,
    project_description: projectDescription ? String(projectDescription).trim() : null,
  };

  try {
    const { id } = insertLead(leadRecord);

    const [emailResult, whatsappResult] = await Promise.all([
      sendLeadEmail({ id, ...leadRecord }),
      sendLeadWhatsAppMessage({ id, ...leadRecord }),
    ]);

    return res.json({
      ok: true,
      id,
      email: emailResult,
      whatsapp: whatsappResult,
    });
  } catch (err) {
    console.error('[api] Failed to store lead', err);
    return res.status(500).json({ ok: false, message: 'Failed to submit project inquiry.' });
  }
});

app.get('/api/leads', (req, res) => {
  const page = Number(req.query.page || 1) || 1;
  const limit = Math.min(Number(req.query.limit || 20) || 20, 100);
  const search = String(req.query.search || '').trim();
  const service = String(req.query.service || '').trim();

  try {
    const { total, items } = listLeads({ page, limit, search, service });
    res.json({ ok: true, total, items, page, limit });
  } catch (err) {
    console.error('[api] Failed to list leads', err);
    res.status(500).json({ ok: false, message: 'Failed to load leads.' });
  }
});

app.get('/api/leads/stats', (_req, res) => {
  try {
    const stats = getLeadStats();
    res.json({ ok: true, ...stats });
  } catch (err) {
    console.error('[api] Failed to load lead stats', err);
    res.status(500).json({ ok: false, message: 'Failed to load statistics.' });
  }
});

app.listen(port, () => {
  console.log(`Dhruv Digital Solutions API server running on http://localhost:${port}`);
});
