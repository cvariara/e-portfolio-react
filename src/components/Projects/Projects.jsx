import React from "react";
import "./Projects.scss";

import { fsdProjects, daProjects } from "../../projectData";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title">Projects</h1>
      <h2 className="sub-title">View my work below.</h2>
      <div className="all-projects">
        <div className="da-projects">
          <h3>Data Analyst Projects</h3>
          {daProjects.map((project, index) => (
            <ProjectCard key={index} project={project} type="da" />
          ))}
        </div>
        <div className="fsd-projects">
          <h3>Full Stack Projects</h3>
          {fsdProjects.map((project, index) => (
            <ProjectCard key={index} project={project} type="fsd" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
