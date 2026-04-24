"use client";
import React, { useState } from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from '../ui/ProjectCard';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';
import { FadeIn } from '../ui/FadeIn';
import { Activity, ShieldCheck, Layers } from 'lucide-react';
import { ProjectModal } from '../ui/ProjectModal';

export const Projects = () => {
  const { language, persona } = useStore();
  const dict = dictionaries[language][persona].projects;
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      ...dict.items.proj1,
      tech: "Expo • NestJS • MongoDB",
      icon: <Activity size={48} strokeWidth={1.5} color="var(--primary)" />
    },
    {
      ...dict.items.proj2,
      tech: "React Native • TypeScript • SDK",
      icon: <Layers size={48} strokeWidth={1.5} color="var(--primary)" />
    },
    {
      ...dict.items.proj3,
      tech: "React Native • REST API • UX/UI",
      icon: <ShieldCheck size={48} strokeWidth={1.5} color="var(--primary)" />
    }
  ];

  return (
    <section className="section" id="projects" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
      <div className="container">
        <FadeIn>
          <div className={styles.sectionHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
              <span className="label-md" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>{dict.label}</span>
            </div>
            <h2 className="display-lg">
              {dict.title1}<span className="gradient-text">{dict.title2}</span>
            </h2>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <FadeIn key={idx} delay={0.1 + idx * 0.1} fullWidth>
              <div className={idx === 0 ? styles.featured : ''}>
                <ProjectCard 
                  title={proj.title}
                  description={proj.desc}
                  tech={proj.tech}
                  icon={proj.icon}
                  logoSrc={(proj as any).logoSrc}
                  onClick={() => setSelectedProject(proj)} 
                />
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.6}>
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="https://github.com/cuongtran392003?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface)', borderBottom: '1px solid var(--primary)', paddingBottom: '0.25rem', fontFamily: 'var(--font-space-grotesk)' }}>
              {dict.viewMore}
            </a>
          </div>
        </FadeIn>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
        dict={dict.modal}
      />
    </section>
  );
};
