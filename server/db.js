import Database from 'better-sqlite3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = process.env.LEADS_DB_PATH || path.join(__dirname, 'leads.db');

const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    full_name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone_number TEXT,
    whatsapp_number TEXT,
    service_type TEXT NOT NULL,
    budget_range TEXT,
    project_description TEXT
  );
`);

export function insertLead(lead) {
  const stmt = db.prepare(`
    INSERT INTO leads (
      full_name,
      company_name,
      email,
      phone_number,
      whatsapp_number,
      service_type,
      budget_range,
      project_description
    ) VALUES (@full_name, @company_name, @email, @phone_number, @whatsapp_number, @service_type, @budget_range, @project_description)
  `);

  const info = stmt.run(lead);
  return { id: info.lastInsertRowid };
}

export function listLeads({ page = 1, limit = 20, search = '', service = '' } = {}) {
  const offset = (page - 1) * limit;
  const whereClauses = [];
  const params = {};

  if (search) {
    whereClauses.push('(full_name LIKE @search OR email LIKE @search OR company_name LIKE @search)');
    params.search = `%${search}%`;
  }

  if (service) {
    whereClauses.push('service_type = @service');
    params.service = service;
  }

  const whereSql = whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : '';

  const total = db.prepare(`SELECT COUNT(*) as count FROM leads ${whereSql}`).get(params).count;

  const stmt = db.prepare(`
    SELECT * FROM leads
    ${whereSql}
    ORDER BY datetime(created_at) DESC
    LIMIT @limit OFFSET @offset
  `);

  const items = stmt.all({ ...params, limit, offset });

  return { total, items };
}

export function getLeadStats() {
  const total = db.prepare('SELECT COUNT(*) as count FROM leads').get().count;

  const byService = db.prepare(`
    SELECT service_type as service, COUNT(*) as count
    FROM leads
    GROUP BY service_type
    ORDER BY count DESC
  `).all();

  const recent = db.prepare(`
    SELECT * FROM leads
    ORDER BY datetime(created_at) DESC
    LIMIT 5
  `).all();

  return { total, byService, recent };
}
