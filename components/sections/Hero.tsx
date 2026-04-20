"use client";
import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';
import { FadeIn } from '../ui/FadeIn';
import { TechMarquee } from '../ui/TechMarquee';
import { Hexagon, Layers, Cpu, Rocket } from 'lucide-react';

export const Hero = () => {
  const { language } = useStore();
  const dict = dictionaries[language].hero;

  return (
    <section className={`section ${styles.hero}`} id="about">
      <div className={`container ${styles.content}`}>
        {/* Left Side: Text */}
        <div className={styles.textContent}>
          <FadeIn delay={0.1}>
            <div className={styles.badge}>{dict.status}</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="display-lg">
              {dict.title1}<br />
              <span className="gradient-text">{dict.title2}</span><br />
              {dict.title3}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className={`body-lg ${styles.description}`}>
              {dict.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className={styles.actions}>
              <Button variant="primary">{dict.btnPrimary}</Button>
              <Button variant="tertiary">{dict.btnSecondary}</Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Visual Asset */}
        <FadeIn delay={0.4} direction="left">
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
                    <div className={styles.techDot}><Cpu size={16} /></div>
                    <div className={styles.techDot}><Layers size={16} /></div>
                    <div className={styles.techDot}><Hexagon size={16} /></div>
                    <div className={styles.techDot}><Rocket size={16} /></div>
                  </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <div style={{ marginTop: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
        <TechMarquee />
      </div>
    </section>
  );
};
