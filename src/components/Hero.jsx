import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import portfolioData from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">Hello, I'm</p>

          <h1>{personal.name}</h1>

          <h2>{personal.role}</h2>

          <p className="hero-description">
            {portfolioData.hero.tagline}
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              View Resume
            </a>

            <a href="#contact">
              Let's Connect
            </a>
          </div>

          <SocialLinks className="hero-socials" iconSize={24} />
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-glow">
            <img
              src="/images/profile.png"
              alt="Abhishek Bade"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        aria-label="Scroll to About"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}

export default Hero;
