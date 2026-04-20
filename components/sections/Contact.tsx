"use client";
import React from 'react';
import styles from './Contact.module.css';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="display-lg">
          LET'S BUILD <br />
          <span className="gradient-text">SYSTEMS TOGETHER.</span>
        </h2>
        <p className="body-lg" style={{ maxWidth: '600px', marginTop: '1rem' }}>
          Currently open to robust engineering challenges and architectural collaborations. 
          Send a ping to establish a secure connection.
        </p>

        <div className={styles.grid}>
          {/* Form */}
          <div className={styles.formCard}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input type="text" className={styles.input} placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input type="email" className={styles.input} placeholder="john@domain.com" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message Payload</label>
                <textarea className={styles.textarea} placeholder="Initialize communication..."></textarea>
              </div>
              <Button variant="primary" style={{ width: '100%' }}>Transmit Data</Button>
            </form>
          </div>

          {/* Info Matrix */}
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div>
                <div className={styles.infoTitle}>Secure Email</div>
                <div className={styles.infoValue}>hello@architectural-intellect.dev</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🔗</div>
              <div>
                <div className={styles.infoTitle}>GitHub Repository</div>
                <div className={styles.infoValue}>github.com/software-engineer</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>💼</div>
              <div>
                <div className={styles.infoTitle}>Professional Network</div>
                <div className={styles.infoValue}>linkedin.com/in/software-engineer</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div className="label-md" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>SYSTEM STATUS: ONLINE</div>
              <p className="body-md">Ready to accept incoming connections for the next quarter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
