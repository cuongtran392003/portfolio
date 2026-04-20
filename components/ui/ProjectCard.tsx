import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  icon?: React.ReactNode;
  logoSrc?: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, icon, logoSrc, onClick }) => {
  return (
    <div 
      className={styles.card} 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={styles.imagePlaceholder}>
        {logoSrc ? (
          <img src={logoSrc} alt={`${title} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className={styles.imageIcon}>{icon || '💻'}</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={`body-md ${styles.description}`}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.techStack}>{tech}</span>
          <span className={styles.linkIcon}>→</span>
        </div>
      </div>
    </div>
  );
};
