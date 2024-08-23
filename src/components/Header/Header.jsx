import React from "react";
import "./Header.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import { FileText, Linkedin } from "lucide-react";

const Header = () => {
  const firstLine = "Hey, my name is";
  const secondLine = "Christopher.";

  return (
    <div className="header">
      <h1 className="title">
        {firstLine.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
          </span>
        ))}
        <br />
        <span className="name">
          {secondLine.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </span>
      </h1>
      <p>
        Driven by a passion for data and technology, I am an aspiring{" "}
        <b>Data Analyst</b> and <b>Full Stack Developer.</b> My goal is to turn
        complex data into meaningful insights and build impactful digital
        solutions.
      </p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/cvariara/" target="_blank">
          <Linkedin size={30} color="rgb(30, 136, 30)" />
        </a>
        <a href="https://www.github.com/cvariara/" target="_blank">
          <GitHubIcon sx={{ fontSize: 30, color: "rgb(30, 136, 30)" }} />
        </a>
        <a href="/misc/Christopher_Variara_Resume.pdf" target="_blank">
          <FileText size={30} color="rgb(30, 136, 30)" />
        </a>
      </div>
    </div>
  );
};

export default Header;
