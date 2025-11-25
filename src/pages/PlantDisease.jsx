import React from 'react';
import './ProjectDetail.css';
import plantImg from '../assets/PlantDisease.png';

function PlantDisease() {
  return (
    <div className="project-detail" style={{ padding: '2rem', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#facc15', fontSize: '2.5rem', borderBottom: '2px solid #475569', paddingBottom: '0.5rem' }}>Plant Disease Prediction</h1>
        </header>

        <section style={{ lineHeight: 1.7, fontSize: '1rem' }}>
          <p><strong>Plant Disease Prediction</strong> is an AI-based tool that uses image classification to detect diseases from crop leaves. The system helps farmers respond promptly to infections, minimizing damage and maximizing yield.</p>

          <h2 style={{ color: '#38bdf8' }}>Problem Statement</h2>
          <p>Manual identification of plant diseases is time-consuming and often inaccurate. Farmers may lack access to expert agronomists, leading to delayed treatment and crop loss.</p>

          <h2 style={{ color: '#38bdf8' }}>Key Features</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Image-based disease classification using machine learning</li>
            <li>Real-time feedback on disease type and treatment</li>
            <li>Recommendations for pesticides and farming practices</li>
            <li>Scalable for different crops and climates</li>
            <li>Mobile and web-compatible interfaces</li>
          </ul>

          <h2 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '1rem' }}>Working Model</h2>
          <div style={{ textAlign: 'center' }}>
            <img
              src={plantImg}
              alt="Working model Screen Shot"
              style={{ width: '100%', maxWidth: 600, borderRadius: 10 }}
              onError={(e) => { e.target.onerror = null; e.target.src = '/projects/placeholder.png'; }}
            />
          </div>

          <p style={{ marginTop: '2rem' }}>This project delivers a fast and reliable disease detection method, empowering farmers to take timely action. It enhances crop health and supports sustainable agricultural practices using modern AI tools.</p>
        </section>

      </div>
    </div>
  );
}

export default PlantDisease;
