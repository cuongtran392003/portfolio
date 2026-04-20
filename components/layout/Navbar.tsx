"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#about" className={styles.link}>About</a>
        <a href="#experience" className={styles.link}>Experience</a>
        <a href="#projects" className={styles.link}>Systems</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </div>

      <div>
        <Button variant="secondary" style={{ padding: '0.5rem 1rem' }}>Resume</Button>
      </div>
    </nav>
  );
};
