// api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { from_name, reply_to, message } = req.body ?? {};

    if (!from_name || !reply_to || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER,
        template_params: { from_name, reply_to, message }
      })
    });

    const text = await resp.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }

    if (!resp.ok) {
      return res.status(resp.status).json({ error: "EmailJS error", details: data });
    }

    return res.status(200).json({ success: true, details: data ?? "sent" });
  } catch (err) {
    console.error("api/contact error:", err);
    return res.status(500).json({ error: "Server error sending email" });
  }
}
