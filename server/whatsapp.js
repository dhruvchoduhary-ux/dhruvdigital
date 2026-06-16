import axios from 'axios';

export async function sendLeadWhatsAppMessage(lead) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminNumber = process.env.ADMIN_WHATSAPP_NUMBER;

  if (!accessToken || !phoneNumberId || !adminNumber) {
    console.warn('[whatsapp] Configuration missing; WhatsApp notifications are disabled.');
    return { success: false, reason: 'missing_whatsapp_config' };
  }

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

  const message =
    `New project inquiry via Dhruv Digital Solutions website:\n` +
    `Name: ${lead.full_name}\n` +
    `Company: ${lead.company_name || '-'}\n` +
    `Email: ${lead.email}\n` +
    `Phone: ${lead.phone_number || '-'}\n` +
    `WhatsApp: ${lead.whatsapp_number || '-'}\n` +
    `Service: ${lead.service_type}\n` +
    `Budget: ${lead.budget_range || '-'}\n` +
    `Details: ${lead.project_description || '-'}\n`;

  try {
    await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        to: adminNumber,
        type: 'text',
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return { success: true };
  } catch (err) {
    console.error('[whatsapp] Failed to send WhatsApp message', err.response?.data || err.message);
    return { success: false, reason: 'send_failed', error: err.message };
  }
}
