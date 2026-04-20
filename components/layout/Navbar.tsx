"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';
import { Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { language, toggleLanguage, theme, toggleTheme } = useStore();
  const dict = dictionaries[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        CUONG <span className="gradient-text">TRAN.</span>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#about" className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}>{dict.about}</a>
        <a href="#experience" className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}>{dict.experience}</a>
        <a href="#projects" className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}>{dict.systems}</a>
        <a href="#contact" className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}>{dict.contact}</a>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
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
        <Button 
          variant="secondary" 
          style={{ padding: '0.5rem 1rem' }}
          onClick={() => window.open('/Tran_Manh_Cuong_CV.pdf', '_blank')}
        >
          {dict.resume}
        </Button>
      </div>
    </nav>
  );
};
