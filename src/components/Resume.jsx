import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="resume-icon">
          <FileText size={36} />
        </div>

        <div className="resume-content">
          <span>My Resume</span>
          <h2>Want to know more about me?</h2>
          <p>
            View or download my resume to explore my education,
            technical skills, experience and projects.
          </p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-button"
        >
          <Download size={18} />
          View Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;