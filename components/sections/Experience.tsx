"use client";
import React from 'react';
import styles from './Experience.module.css';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

import { FadeIn } from '../ui/FadeIn';

export const Experience = () => {
  const { language } = useStore();
  const dict = dictionaries[language].experience;

  const experiences = [
    {
      role: dict.roles.role1.title,
      company: dict.roles.role1.company,
      duration: dict.roles.role1.duration,
      description: dict.roles.role1.desc,
      skills: ["React Native", "Expo", "Zustand", "NestJS", "TanStack Query", "Logto"]
    },
    {
      role: dict.roles.role2.title,
      company: dict.roles.role2.company,
      duration: dict.roles.role2.duration,
      description: dict.roles.role2.desc,
      skills: ["C/C++", "Java", "Data Structures", "OOP", "Database"]
    },
    {
      role: dict.roles.role3.title,
      company: dict.roles.role3.company,
      duration: dict.roles.role3.duration,
      description: dict.roles.role3.desc,
      skills: ["Git", "Postman", "Linux", "Scrum"]
    }
  ].filter(exp => exp.role !== ""); // Filter out empty experience blocks

  return (
    <section className="section" id="experience">
      <div className="container">
        <FadeIn direction="up">
          <div className={styles.sectionHeader}>
            <h2 className="display-lg">
              {dict.title1}<span className="gradient-text">{dict.title2}</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1rem' }}>
              {dict.description}
            </p>
          </div>
        </FadeIn>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={0.2} direction={idx % 2 === 0 ? "right" : "left"} fullWidth>
              <div className={styles.experienceBlock}>
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
