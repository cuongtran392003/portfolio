"use client";
import React from 'react';
import styles from './Contact.module.css';
import { Button } from '../ui/Button';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

import { FadeIn } from '../ui/FadeIn';
import { Mail, Link as LinkIcon, Phone } from 'lucide-react';

export const Contact = () => {
  const { language } = useStore();
  const dict = dictionaries[language].contact;

  return (
    <section className="section" id="contact">
      <div className="container">
        <FadeIn>
          <h2 className="display-lg">
            {dict.title1}<br />
            <span className="gradient-text">{dict.title2}</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1rem' }}>
            {dict.description}
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {/* Form */}
          <FadeIn delay={0.2} direction="right" fullWidth>
            <div className={styles.formCard}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.form.name}</label>
                    <input type="text" className={styles.input} placeholder={dict.form.namePlace} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.form.email}</label>
                    <input type="email" className={styles.input} placeholder={dict.form.emailPlace} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{dict.form.message}</label>
                  <textarea className={styles.textarea} placeholder={dict.form.messagePlace}></textarea>
                </div>
                <Button variant="primary" style={{ width: '100%' }}>{dict.form.submit}</Button>
              </form>
            </div>
          </FadeIn>

          {/* Info Matrix */}
          <FadeIn delay={0.4} direction="left" fullWidth>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail color="var(--primary)" /></div>
                <div>
                  <div className={styles.infoTitle}>{dict.info.email}</div>
                  <div className={styles.infoValue}>cuongnt392003@gmail.com</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><LinkIcon color="var(--primary)" /></div>
                <div>
                  <a href="https://github.com/cuongtran392003" target="_blank" rel="noopener noreferrer">
                    <div className={styles.infoTitle}>{dict.info.github}</div>
                    <div className={styles.infoValue}>https://github.com/cuongtran392003</div>
                  </a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone color="var(--primary)" /></div>
                <div>
                  <div className={styles.infoTitle}>{dict.info.linkedin}</div>
                  <div className={styles.infoValue}>0981 472 746</div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <div className="label-md" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{dict.info.sysStatus}</div>
                <p className="body-md">{dict.info.sysDesc}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
