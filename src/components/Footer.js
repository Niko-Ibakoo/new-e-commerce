import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="socials">
          <a href="https://www.linkedin.com/in/domenico-germano-556501207/">LinkedIn</a>
          <a href="https://github.com/Niko-Ibakoo">GitHub</a>
          <a href="https://nikogermano.com/#portfolio">More Projects</a>
        </div>
        <div className="signature">
          &#169;All rights reserved. Domenico Germano
        </div>
      </footer>
    </>
  );
};

export default Footer;
