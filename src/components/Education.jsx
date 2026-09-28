import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Education() {
  return (
    <section className="section" id="education">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>05</span>
        <h2>Education</h2>
      </motion.div>

      <div className="education-timeline">
        {portfolioData.education.map((education, index) => (
          <motion.div
            className="education-card"
            key={education.degree}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <div className="education-content">
              <span className="education-duration">
                {education.duration}
              </span>

              <h3>{education.degree}</h3>

              <h4>{education.institute}</h4>

              {education.cgpa && (
                <div className="education-score">
                  <span>CGPA: {education.cgpa}</span>
                  <span>SGPA: {education.sgpa}</span>
                </div>
              )}

              {education.percentage && (
                <div className="education-score">
                  <span>Percentage: {education.percentage}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;