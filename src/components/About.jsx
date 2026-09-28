import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section className="section about-section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>01</span>
        <h2>About Me</h2>
      </motion.div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-image">
          <img
            src="/images/profile.png"
            alt="Abhishek Bade"
          />
        </div>

        <div className="about-content">
          <h3>Full Stack .NET Developer</h3>

          <p>{portfolioData.about.description}</p>

          <div className="about-details">
            <div>
              <strong>Location</strong>
              <span>{portfolioData.personal.location}</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>{portfolioData.personal.email}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;