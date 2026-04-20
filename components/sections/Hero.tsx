"use client";
import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

export const Hero = () => {
  const { language } = useStore();
  const dict = dictionaries[language].hero;

  return (
    <section className={`section ${styles.hero}`} id="about">
      <div className={`container ${styles.content}`}>
        {/* Left Side: Text */}
        <div className={styles.textContent}>
          <div className={styles.badge}>{dict.status}</div>
          <h1 className="display-lg">
            {dict.title1}<br />
            <span className="gradient-text">{dict.title2}</span><br />
            {dict.title3}
          </h1>
          <p className={`body-lg ${styles.description}`}>
            {dict.description}
          </p>
          <div className={styles.actions}>
            <Button variant="primary">{dict.btnPrimary}</Button>
            <Button variant="tertiary">{dict.btnSecondary}</Button>
          </div>
        </div>

        {/* Right Side: Visual Asset */}
        <div className={styles.visualFrame}>
          <div className={styles.glowBlob}></div>
          <div className={styles.glassCard}>
            <div className={styles.cardInner}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--on-surface)' }}>
                  {dict.sysTitle}
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
                  <div style={{ color: 'var(--primary)' }}>{dict.initMsg}</div>
                  <div>&gt; render_ui()</div>
                  <div style={{ color: 'var(--primary)' }}>{dict.renderMsg}</div>
                  <div>{dict.awaitMsg}</div>
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
