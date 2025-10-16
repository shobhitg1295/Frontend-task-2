import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((s, i) => (
          <span key={i} className="skill-badge">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
