"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, theme, toggleTheme } = useStore();
  const dict = dictionaries[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        ARCHITECTURAL IN<span className="gradient-text">TELLECT</span>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#about" className={styles.link}>{dict.about}</a>
        <a href="#experience" className={styles.link}>{dict.experience}</a>
        <a href="#projects" className={styles.link}>{dict.systems}</a>
        <a href="#contact" className={styles.link}>{dict.contact}</a>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button 
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--on-surface)',
            padding: '4px',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button 
          onClick={toggleLanguage}
          style={{
            background: 'transparent',
            border: 'var(--border-ghost)',
            color: 'var(--on-surface)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            marginRight: '0.5rem'
          }}
        >
          {language === 'en' ? 'EN' : 'VI'}
        </button>
        <Button variant="secondary" style={{ padding: '0.5rem 1rem' }}>{dict.resume}</Button>
      </div>
    </nav>
  );
};
