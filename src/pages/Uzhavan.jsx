import React from 'react';
import './ProjectDetail.css';
import uzhavanInner from '../assets/Uzhavan.png';

function Uzhavan() {
  return (
    <div className="project-detail" style={{ padding: '2rem', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#facc15', fontSize: '2.5rem', borderBottom: '2px solid #475569', paddingBottom: '0.5rem' }}>Uzhavan ERP Model</h1>
        </header>

        <section style={{ lineHeight: 1.7, fontSize: '1rem' }}>
          <p><strong>Uzhavan ERP Model</strong> is an agricultural management platform that leverages AI and data analytics to assist farmers in improving productivity, sustainability, and profitability. It provides tools for monitoring crop growth, optimizing irrigation, and managing climate and soil health effectively.</p>

          <h2 style={{ color: '#38bdf8' }}>Problem Statement</h2>
          <p>Traditional farming practices often result in inefficient resource usage, unpredictable yields, and financial losses. Farmers face difficulties in accessing timely data about market rates, weather conditions, and disease outbreaks, which hampers their ability to make informed decisions.</p>

          <h2 style={{ color: '#38bdf8' }}>Key Features</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Irrigation system optimization using soil moisture and weather analysis</li>
            <li>Crop growth monitoring with early warning indicators</li>
            <li>Real-time profit calculator based on market and cost data</li>
            <li>Disease detection through image analysis and recommendations</li>
            <li>Soil and climate analysis for sustainable planning</li>
          </ul>

          <h2 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '1rem' }}>System Architecture</h2>
          <div style={{ textAlign: 'center' }}>
            <img src={uzhavanInner} alt="Architecture Diagram" style={{ width: '100%', maxWidth: 600, borderRadius: 10 }} onError={(e) => { e.target.onerror = null; e.target.src = '/projects/placeholder.png'; }} />
          </div>

          <p style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'italic', color: '#94a3b8' }}>
            Team AgroInnovator – Magilavan, Jothish, Bharath Waj
          </p>
        </section>

      </div>
    </div>
  );
}

export default Uzhavan;
