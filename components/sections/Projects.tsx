"use client";
import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from '../ui/ProjectCard';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

export const Projects = () => {
  const { language } = useStore();
  const dict = dictionaries[language].projects;

  const projects = [
    {
      title: dict.items.proj1.title,
      description: dict.items.proj1.desc,
      tech: "Next.js • WebGL • Go",
      icon: "📊",
      link: "#"
    },
    {
      title: dict.items.proj2.title,
      description: dict.items.proj2.desc,
      tech: "Node.js • Redis • Crypto",
      icon: "🔐",
      link: "#"
    },
    {
      title: dict.items.proj3.title,
      description: dict.items.proj3.desc,
      tech: "Kubernetes • Python • React",
      icon: "☁️",
      link: "#"
    }
  ];

  return (
    <section className="section" id="projects" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
            <span className="label-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>{dict.label}</span>
          </div>
          <h2 className="display-lg">
            {dict.title1}<span className="gradient-text">{dict.title2}</span>
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
            {dict.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
};
