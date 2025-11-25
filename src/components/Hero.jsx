import React from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";
import dp from '../assets/DP.png';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hello, I'm <span>Magilavan </span></h1>
        <p>
          I'm a passionate Developer skilled in React, Java, Spring Boot, MySQL, 
          and building clean UI experiences.
        </p>

        <Link to="/projects" className="btn">View My Work</Link>
      </div>

      <div className="hero-image">
        <img src={dp} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
