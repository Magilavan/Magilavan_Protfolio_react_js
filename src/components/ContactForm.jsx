import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in all fields.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (form.message.length < 10) {
      return "Message must be at least 10 characters.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    const err = validate();
    if (err) {
      setStatus({ loading: false, ok: false, msg: err });
      return;
    }

    // Send to backend API
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
        return;
      }

      const errorData = await res.json();
      setStatus({ loading: false, ok: false, msg: errorData.error || "Failed to send message" });
      return;
    } catch (error) {
      console.error("Network error:", error);
      setStatus({ loading: false, ok: false, msg: "Network error. Please try again." });
      return;
    }


  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in touch</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="field">
          <span>Message</span>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status.msg && (
          <p
            className={`form-status ${status.ok ? "success" : "error"}`}
            role="status"
            aria-live="polite"
          >
            {status.msg}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
