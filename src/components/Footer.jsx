import SocialLinks from "./SocialLinks";
import portfolioData from "../data/portfolioData";

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{personal.name}</h3>
          <p>{personal.role}</p>
        </div>

        <SocialLinks className="footer-socials" iconSize={21} />
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
