import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">My Portfolio</Link>

        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="/Magilavan(Resume).pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li>
              <a href="/Magilavan(Resume).pdf" download className="download-link">Download</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
