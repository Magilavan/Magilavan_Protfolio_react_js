import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <Link to="/" className="footer-logo">Magilavan</Link>
          <p className="footer-text">
            Building modern web experiences with React, Java, Spring Boot, and more.
          </p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/magilavan" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/magilavan" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:mmagilavan@gmail.com">
              Email
            </a>
          </div>
        </div>

      </div>

      <p className="copyright">
        © {year} Magilavan — All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
