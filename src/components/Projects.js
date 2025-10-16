import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech Used:</strong> {proj.tech}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
