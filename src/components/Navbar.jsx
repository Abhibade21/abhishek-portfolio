import { useState } from "react";
import { Menu, X } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Achievements", "achievements"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        {portfolioData.personal.name}
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </nav>
  );
}

export default Navbar;