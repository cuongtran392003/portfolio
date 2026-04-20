import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Senior Frontend Architect",
    company: "TechNexus Systems",
    duration: "2024 - Present",
    description: "Spearheaded the migration of a legacy monolithic architecture to a modern Next.js micro-frontend ecosystem. Improved performance scores by 45% and established the foundational design system used across 12 product lines.",
    skills: ["React", "Next.js", "TypeScript", "System Design"]
  },
  {
    role: "Software Engineer II",
    company: "DataCore Analytics",
    duration: "2022 - 2024",
    description: "Developed high-throughput data visualization dashboards handling millions of data points in real-time. Created reusable, accessible component libraries that reduced development time for internal teams by 30%.",
    skills: ["Vue.js", "D3.js", "Node.js", "WebGL"]
  },
  {
    role: "Frontend Developer",
    company: "Creative Digital Solutions",
    duration: "2020 - 2022",
    description: "Built pixel-perfect, responsive web applications for high-profile clients. Collaborated closely with UI/UX designers to translate complex Figma designs into performant frontend code.",
    skills: ["JavaScript", "React", "CSS Modules", "Framer Motion"]
  }
];

export const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="display-lg">
            JOURNAL OF <span className="gradient-text">GROWTH.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1rem' }}>
            A chronological mapping of my professional evolution, highlighting technical
            advancements and architectural contributions.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.experienceBlock}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                </div>
                <div className={styles.duration}>{exp.duration}</div>
              </div>
              <p className={`body-md ${styles.description}`}>{exp.description}</p>
              <div className={styles.skills}>
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillChip}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
