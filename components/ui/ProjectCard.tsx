import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  icon?: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, icon = '💻', link }) => {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <div className={styles.imageIcon}>{icon}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={`body-md ${styles.description}`}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.techStack}>{tech}</span>
          <span className={styles.linkIcon}>→</span>
        </div>
      </div>
    </a>
  );
};
