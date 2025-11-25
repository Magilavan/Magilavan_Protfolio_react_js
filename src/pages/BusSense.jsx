import React from 'react';
import './ProjectDetail.css';
import busArch from '../assets/bus-arch.png';

function BusSense() {
  return (
    <div className="project-detail" style={{ padding: '2rem', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#facc15', fontSize: '2.5rem', borderBottom: '2px solid #475569', paddingBottom: '0.5rem' }}>Bus Sense</h1>
        </header>

        <section style={{ lineHeight: 1.7, fontSize: '1rem' }}>
          <p><strong>Bus Sense</strong> is a smart transportation solution that leverages IoT technology to solve key problems in public bus systems—namely overcrowding, ticket fraud, and inefficient route management. Our project uses <strong>IR and thermal sensors</strong> to count passengers in real time and provides this data through a user-friendly mobile app.</p>

          <p>This system improves safety by alerting authorities when a bus exceeds its occupancy limit. It also prevents fraud by comparing actual passenger counts with ticket data. Through the app, passengers receive real-time seat availability and bus tracking information, allowing them to make informed decisions and reduce wait times.</p>

          <p>Additional features include:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            <li>AI-driven bus scheduling and route optimization</li>
            <li>Dynamic ticket pricing and alternative bus suggestions</li>
            <li>A chatbot interface for quick support</li>
            <li>Feedback and issue reporting for passengers</li>
          </ul>

          <p>The backend analytics system enables transport authorities to optimize resources and improve overall operations. <strong>Bus Sense</strong> is designed to be scalable, cost-effective, and impactful for modern urban transportation systems, offering a better travel experience for both commuters and transit managers alike.</p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '1rem' }}>System Architecture</h2>
          <div style={{ textAlign: 'center' }}>
            <img src={busArch} alt="Architecture Diagram" style={{ width: '100%', maxWidth: 600, borderRadius: 10 }} />
          </div>
        </section>

        <p style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'italic', color: '#94a3b8' }}>
          Team HackVok – Magilavan, Jothish, Jeveetha
        </p>
      </div>
    </div>
  );
}

export default BusSense;
