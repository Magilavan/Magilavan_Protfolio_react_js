import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Firebase</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
