import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className={`section ${styles.hero}`} id="about">
      <div className={`container ${styles.content}`}>
        {/* Left Side: Text */}
        <div className={styles.textContent}>
          <div className={styles.badge}>Status: Building</div>
          <h1 className="display-lg">
            FUTURE<br />
            <span className="gradient-text">SOFTWARE</span><br />
            ENGINEER.
          </h1>
          <p className={`body-lg ${styles.description}`}>
            I forge sophisticated digital systems with a focus on clean code, 
            resilient architecture, and unparalleled user experiences. 
            Bridging the gap between design and deep technical implementations.
          </p>
          <div className={styles.actions}>
            <Button variant="primary">View Systems</Button>
            <Button variant="tertiary">Get in Touch</Button>
          </div>
        </div>

        {/* Right Side: Visual Asset */}
        <div className={styles.visualFrame}>
          <div className={styles.glowBlob}></div>
          <div className={styles.glassCard}>
            <div className={styles.cardInner}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--on-surface)' }}>
                  System Architecture Overview
                </div>
                {/* Simulated Terminal / Technical UI effect */}
                <div 
                  className="surface-lowest" 
                  style={{ 
                    flex: 1, 
                    borderRadius: 'var(--radius-md)', 
                    padding: '1rem',
                    borderLeft: '2px solid var(--primary)',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    color: 'var(--on-surface-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div>&gt; initialize_kernel()</div>
                  <div style={{ color: 'var(--primary)' }}>[OK] Core modules loaded.</div>
                  <div>&gt; render_ui()</div>
                  <div style={{ color: 'var(--primary)' }}>[OK] Glassmorphism established.</div>
                  <div>&gt; await connection...</div>
                </div>
                
                <div className={styles.techLine}>
                  <div className={styles.techDot}>⚛️</div>
                  <div className={styles.techDot}>TS</div>
                  <div className={styles.techDot}>⬡</div>
                  <div className={styles.techDot}>🚀</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
