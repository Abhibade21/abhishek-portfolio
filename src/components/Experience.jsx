import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>03</span>
        <h2>Experience</h2>
      </motion.div>

      <div className="experience-container">
        {portfolioData.experience.map((experience, index) => (
          <motion.div
            className="experience-card"
            key={experience.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="experience-number">
              0{index + 1}
            </div>

            <div className="experience-content">
              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>

              <p className="experience-meta">
                {experience.duration} • {experience.location}
              </p>

              <p>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;