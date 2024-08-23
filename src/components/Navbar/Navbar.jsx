import React from "react";
import Logo from "../../assets/CV-1.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="info">
        <a href="/">
          <img src={Logo} alt="My logo" />
        </a>
        <div className="links">
          <a href="/" className="link">About</a>
          <a href="#projects" className="link">Projects</a>
          <a href="#contact" className="link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
