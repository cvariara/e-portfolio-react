import React from "react";
import "./ProjectCard.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Link2 } from "lucide-react";

const ProjectCard = ({ project, type }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt="" className="project-img" />
      <h2 className="project-title">{project.title}</h2>
      <p className="project-techstack">
        {project.tech_stack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </p>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" className="project-github">
            <GitHubIcon sx={{ fontSize: 30, color: "rgb(30, 136, 30)" }} />
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" className="project-demo">
            <Link2 color="rgb(30, 136, 30)" size={30} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
