import React from 'react';
import './ProjectDetail.css';
import soilInner from '../assets/SoilClassification.png';

function SoilPrediction() {
  return (
    <div className="project-detail" style={{ padding: '2rem', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#facc15', fontSize: '2.5rem', borderBottom: '2px solid #475569', paddingBottom: '0.5rem' }}>Soil Prediction System</h1>
        </header>

        <section style={{ lineHeight: 1.7, fontSize: '1rem' }}>
          <p><strong>Soil Prediction System</strong> uses data-driven insights to classify soil types and evaluate fertility, enabling optimized crop planning. It supports precision farming and resource-efficient land management.</p>

          <h2 style={{ color: '#38bdf8' }}>Problem Statement</h2>
          <p>Farmers often lack access to accurate soil health data, leading to poor crop selection and ineffective fertilizer use. This results in reduced yield and unnecessary environmental impact.</p>

          <h2 style={{ color: '#38bdf8' }}>Key Features</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Real-time analysis of pH, moisture, and nutrient levels</li>
            <li>Soil type classification using machine learning</li>
            <li>Crop and fertilizer recommendations</li>
            <li>Improves yield while reducing costs</li>
            <li>Accessible via mobile and desktop platforms</li>
          </ul>

          <h2 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '1rem' }}>Working Model</h2>
          <div style={{ textAlign: 'center' }}>
            <img src={soilInner} alt="Soil Classification" style={{ width: '100%', maxWidth: 600, borderRadius: 10 }} onError={(e) => { e.target.onerror = null; e.target.src = '/projects/placeholder.png'; }} />
          </div>

          <p style={{ marginTop: '2rem' }}>This system ensures smarter use of land and resources by offering personalized farming strategies. It empowers farmers with essential insights for sustainable agricultural development.</p>
        </section>

      </div>
    </div>
  );
}

export default SoilPrediction;
