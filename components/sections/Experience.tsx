"use client";
import React from 'react';
import styles from './Experience.module.css';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

export const Experience = () => {
  const { language } = useStore();
  const dict = dictionaries[language].experience;

  const experiences = [
    {
      role: dict.roles.role1.title,
      company: dict.roles.role1.company,
      duration: dict.roles.role1.duration,
      description: dict.roles.role1.desc,
      skills: ["React", "Next.js", "TypeScript", "System Design"]
    },
    {
      role: dict.roles.role2.title,
      company: dict.roles.role2.company,
      duration: dict.roles.role2.duration,
      description: dict.roles.role2.desc,
      skills: ["Vue.js", "D3.js", "Node.js", "WebGL"]
    },
    {
      role: dict.roles.role3.title,
      company: dict.roles.role3.company,
      duration: dict.roles.role3.duration,
      description: dict.roles.role3.desc,
      skills: ["JavaScript", "React", "CSS Modules", "Framer Motion"]
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="display-lg">
            {dict.title1}<span className="gradient-text">{dict.title2}</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1rem' }}>
            {dict.description}
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
