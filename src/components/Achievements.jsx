import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    if (!selectedAchievement) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedAchievement(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedAchievement]);

  return (
    <section className="section" id="achievements">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>06</span>
        <h2>Achievements</h2>
      </motion.div>

      <div className="achievements-grid">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.article
            className="achievement-card"
            key={achievement.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className="achievement-image-button"
              onClick={() => setSelectedAchievement(achievement)}
              aria-label={`View full-size certificate: ${achievement.title}`}
            >
              <div className="achievement-image">
              <img
                src={achievement.image}
                alt={achievement.title}
              />
                <span className="achievement-image-hint">View certificate</span>
              </div>
            </button>

            <div className="achievement-content">
              <span>Achievement 0{index + 1}</span>
              <h3>{achievement.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>

      {selectedAchievement && (
        <div
          className="portfolio-modal-backdrop certificate-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedAchievement(null);
          }}
        >
          <section
            className="portfolio-modal certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedAchievement(null)}
              aria-label="Close certificate"
              autoFocus
            >
              <X size={22} />
            </button>
            <h2 id="certificate-modal-title">{selectedAchievement.title}</h2>
            <img src={selectedAchievement.image} alt={selectedAchievement.title} />
          </section>
        </div>
      )}
    </section>
  );
}

export default Achievements;
