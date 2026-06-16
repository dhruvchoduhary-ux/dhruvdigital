import nodemailer from 'nodemailer';

let transporter;

function createTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn('[email] SMTP configuration is missing; email notifications are disabled.');
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

export async function sendLeadEmail(lead) {
  const t = createTransporter();
  if (!t) return { success: false, reason: 'missing_smtp_config' };

  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn('[email] ADMIN_EMAIL is not set; cannot send notifications.');
    return { success: false, reason: 'missing_admin_email' };
  }

  const fromEmail = process.env.FROM_EMAIL || adminEmail;

  const subject = `New Project Inquiry from ${lead.full_name}`;
  const text = `New lead received via Dhruv Digital Solutions website.\n\n` +
    `Full Name: ${lead.full_name}\n` +
    `Company Name: ${lead.company_name || '-'}\n` +
    `Email: ${lead.email}\n` +
    `Phone Number: ${lead.phone_number || '-'}\n` +
    `WhatsApp Number: ${lead.whatsapp_number || '-'}\n` +
    `Service Type: ${lead.service_type}\n` +
    `Budget Range: ${lead.budget_range || '-'}\n` +
    `Project Description:\n${lead.project_description || '-'}\n`;

  const html = `
    <h2>New Project Inquiry</h2>
    <p>You have received a new project inquiry from the website.</p>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Full Name:</strong></td><td>${lead.full_name}</td></tr>
      <tr><td><strong>Company Name:</strong></td><td>${lead.company_name || '-'}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${lead.email}</td></tr>
      <tr><td><strong>Phone Number:</strong></td><td>${lead.phone_number || '-'} </td></tr>
      <tr><td><strong>WhatsApp Number:</strong></td><td>${lead.whatsapp_number || '-'} </td></tr>
      <tr><td><strong>Service Type:</strong></td><td>${lead.service_type}</td></tr>
      <tr><td><strong>Budget Range:</strong></td><td>${lead.budget_range || '-'} </td></tr>
    </table>
    <h3>Project Description</h3>
    <p>${(lead.project_description || '').replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await t.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject,
      text,
      html,
    });
    return { success: true };
  } catch (err) {
    console.error('[email] Failed to send lead email', err);
    return { success: false, reason: 'send_failed', error: err.message };
  }
}
