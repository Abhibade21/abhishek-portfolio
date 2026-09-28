import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="section" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>04</span>
        <h2>Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <span>
                  Project 0{index + 1}
                </span>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button
                className="project-details-btn"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                View Details
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="portfolio-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            className="portfolio-modal project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              autoFocus
            >
              <X size={22} />
            </button>
            <img
              className="project-modal-image"
              src={selectedProject.image}
              alt={`${selectedProject.title} project`}
            />
            <div className="project-modal-content">
              <span className="modal-eyebrow">Project details</span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="project-technologies" aria-label="Technologies used">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

export default Projects;
