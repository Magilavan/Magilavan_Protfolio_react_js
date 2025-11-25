import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Projects.css";
import busSenseLogo from '../assets/BusSenseLogo.png';
import plantImg from '../assets/PlantDiseaseLogo.png';
import soilLogo from '../assets/SoilClassificationLogo.png';
import uzhavanLogo from '../assets/UzhavanLogo.png';

const projects = [
  {
    id: 4,
    title: "Bus Sense",
    description:
      "IoT-based smart bus monitoring: real-time passenger counting, overcrowding alerts, fraud prevention and route optimization.",
    tech: ["IoT", "React", "Node.js", "AI"],
    image: busSenseLogo,
    liveLink: "/projects/bus-sense",
    repoLink: "",
  },
  {
    id: 5,
    title: "Plant Disease Prediction",
    description:
      "AI-based image classification that detects diseases from crop leaves and provides treatment recommendations.",
    tech: ["Python", "TensorFlow", "React"],
    image: plantImg,
    liveLink: "/projects/plant-disease",
    repoLink: "",
  },
  {
    id: 6,
    title: "Soil Prediction System",
    description:
      "Data-driven soil classification and fertility analysis to recommend optimal crops and fertilizers.",
    tech: ["Python", "Machine Learning", "React"],
    image: soilLogo,
    liveLink: "/projects/soil-prediction",
    repoLink: "",
  },
  {
    id: 7,
    title: "Uzhavan ERP Model",
    description:
      "An AI-driven agricultural ERP for monitoring crops, optimizing irrigation, and improving farm profitability.",
    tech: ["AI", "Data Analytics", "React"],
    image: uzhavanLogo,
    liveLink: "/projects/uzhavan",
    repoLink: "",
  },
];
 

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="img-wrap">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/projects/placeholder.png";
          }}
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          {/* Details button: internal route only */}
          {project.liveLink && project.liveLink.startsWith('/') ? (
            <Link to={project.liveLink} className="btn-outline">
              Details
            </Link>
          ) : (
            <button className="btn-outline disabled">Details</button>
          )}

          {/* GitHub / Repo button */}
          {project.repoLink ? (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
          ) : (
            <a
              href="#"
              className="btn-primary disabled"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIdx = (currentPage - 1) * projectsPerPage;
  const endIdx = startIdx + projectsPerPage;
  const currentProjects = projects.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {currentProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`pagination-btn${currentPage === i + 1 ? " active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
