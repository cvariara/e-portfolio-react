import React from "react";
import "./TechStack.scss";

import { daTech, fsdTech } from "../../projectData";

const Tech = ({ tech }) => {
  return (
    <div className="tech">
      <img src={tech.img} alt="" />
      <p>{tech.language}</p>
    </div>
  )
}

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h1 className="title">Tech Stack</h1>
      <h2 className="sub-title">View the technologies I use below.</h2>
      <div className="all-tech">
        <div className="da-tech">
          <h3>Data Analyst Technology</h3>
          <div className="tech-list">
            {daTech.map((tech, index) => (
              <Tech key={index} tech={tech} />
            ))}
          </div>
        </div>
        <div className="fsd-tech">
          <h3>Full Stack Technology</h3>
          <div className="tech-list">
            {fsdTech.map((tech, index) => (
              <Tech key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
