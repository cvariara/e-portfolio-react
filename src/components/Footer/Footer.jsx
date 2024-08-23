import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/misc/CV-1.png" alt="Logo" />
      <div className="links">
        <a href="/" className="link">
          About
        </a>
        <a href="#projects" className="link">
          Projects
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </div>
      <p>Copyright © 2024 Christopher Variara</p>
    </div>
  );
};

export default Footer;
