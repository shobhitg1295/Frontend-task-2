import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}

export default Contact;
