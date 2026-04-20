import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Download, Code } from 'lucide-react';
import { Button } from './Button';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    desc: string;
    tech: string;
    longDesc: string;
    features: string[];
    isConfidential: boolean;
    apkLink: string;
    githubLink: string;
    imageSrc?: string;
  };
  dict: any; // The dictionary object for modal strings
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project, dict }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={onClose}>
        <motion.div 
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose} title={dict.close}>
            <X size={24} />
          </button>

          {/* Header */}
          <div className={styles.header}>
            <div className="label-md" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
              {project.tech}
            </div>
            <h2 className="display-sm" style={{ marginBottom: '1rem' }}>{project.title}</h2>
            
            {project.isConfidential && (
              <div className={styles.confidentialBadge}>
                <Lock size={14} />
                <span>{dict.confidentialTag}</span>
              </div>
            )}
          </div>

          <div className={styles.divider} />

          {/* Body Content */}
          <div className={styles.body}>
            {project.imageSrc && (
              <div className={styles.iphoneWrapper}>
                <div className={styles.iphoneFrame}>
                  {/* The Notch */}
                  <div className={styles.iphoneNotch}></div>
                  {/* The Screen */}
                  <img src={project.imageSrc} alt={`${project.title} screenshot`} className={styles.iphoneScreen} />
                </div>
              </div>
            )}
            <p className="body-lg" style={{ marginBottom: '2rem', color: 'var(--on-surface-variant)' }}>
              {project.longDesc}
            </p>

            <h3 className="title-md" style={{ marginBottom: '1rem', color: 'var(--on-surface)' }}>
              {dict.featuresLabel}
            </h3>
            <ul className={styles.featureList}>
              {project.features.map((feature, idx) => (
                <li key={idx}>
                  <span className={styles.bullet}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          {!project.isConfidential && (
            <div className={styles.footer}>
              {project.apkLink && (
                <Button 
                  variant="primary" 
                  onClick={() => window.open(project.apkLink, '_blank')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Download size={18} />
                  {dict.downloadApk}
                </Button>
              )}
              {project.githubLink && (
                <Button 
                  variant="secondary" 
                  onClick={() => window.open(project.githubLink, '_blank')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Code size={18} />
                  {dict.viewGithub}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
