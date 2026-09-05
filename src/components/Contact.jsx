import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Contact.css";

const CONTACT_EMAIL = "zohaibinternship@gmail.com";

const contactLinks = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "GitHub", value: "github.com/zohaib", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/zohaib", href: "https://www.linkedin.com/" },
];

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={headerRef} className="reveal contact__header">
          <span className="section-tag">Contact</span>
          <h2 className="section-heading">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="section-subtext">Have a project, idea, or opportunity? Feel free to contact me.</p>
        </div>

        <div className="contact__grid">
          <div ref={infoRef} className="reveal contact__info">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact__info-item glass">
                <span className="contact__info-label">{link.label}</span>
                <span className="contact__info-value">{link.value}</span>
              </a>
            ))}
          </div>

          <form ref={formRef} className="reveal contact__form glass" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={errors.name ? "has-error" : ""}
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={errors.message ? "has-error" : ""}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              Send Message
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
