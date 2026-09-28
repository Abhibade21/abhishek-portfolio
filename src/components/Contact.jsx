import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(formData.subject);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>07</span>
        <h2>Let's Connect</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Have a project or opportunity?</h3>

          <p>
            Feel free to contact me for work opportunities,
            collaborations, projects or any other professional
            discussion.
          </p>

          <div className="contact-details">
            <a href={`mailto:${portfolioData.personal.email}`}>
              <Mail size={20} />
              <span>{portfolioData.personal.email}</span>
            </a>

            <a href={`tel:${portfolioData.personal.phone}`}>
              <Phone size={20} />
              <span>{portfolioData.personal.phone}</span>
            </a>

            <div>
              <MapPin size={20} />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;