import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: portfolioData.skills.programming,
    },
    {
      title: "Frontend",
      skills: portfolioData.skills.frontend,
    },
    {
      title: "Backend",
      skills: portfolioData.skills.backend,
    },
    {
      title: "Database",
      skills: portfolioData.skills.database,
    },
    {
      title: "Tools",
      skills: portfolioData.skills.tools,
    },
  ];

  return (
    <section className="section" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>02</span>
        <h2>Skills</h2>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;