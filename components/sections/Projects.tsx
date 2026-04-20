import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from '../ui/ProjectCard';

const projects = [
  {
    title: "Nexus Dashboard",
    description: "A centralized command center for microservice monitoring. Integrates live data streams with dynamic webGL visualization for real-time system health tracking.",
    tech: "Next.js • WebGL • Go",
    icon: "📊",
    link: "#"
  },
  {
    title: "Omni-Auth Gateway",
    description: "Zero-trust authentication portal featuring biometric passkey support and decentralized identity verification matrix.",
    tech: "Node.js • Redis • Crypto",
    icon: "🔐",
    link: "#"
  },
  {
    title: "Kube-Core Engine",
    description: "Custom orchestration interface for dynamic scaling of edge containers based on predictive load analytics.",
    tech: "Kubernetes • Python • React",
    icon: "☁️",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section className="section" id="projects" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
            <span className="label-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>Selected Works</span>
          </div>
          <h2 className="display-lg">
            CURATED <span className="gradient-text">SYSTEMS.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <div key={idx} className={idx === 0 ? styles.featured : ''}>
              <ProjectCard {...proj} />
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="#" style={{ color: 'var(--on-surface)', borderBottom: '1px solid var(--primary)', paddingBottom: '0.25rem', fontFamily: 'var(--font-space-grotesk)' }}>
            View Full Repository →
          </a>
        </div>
      </div>
    </section>
  );
};
