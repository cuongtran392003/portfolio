"use client";
import React from 'react';
import { useStore } from '@/lib/store';
import { dictionaries } from '@/lib/i18n';

export const Footer = () => {
  const { language } = useStore();
  const dict = dictionaries[language].footer;

  return (
    <footer style={{ 
      padding: '2rem 5%', 
      borderTop: 'var(--border-ghost)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '4rem',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--on-surface)' }}>
        ARCHITECTURAL INTELLECT
      </div>
      <div className="label-md" style={{ color: 'var(--on-surface-variant)' }}>
        © {new Date().getFullYear()} {dict.rights}
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }} className="label-md">
        <a href="#" style={{ color: 'var(--on-surface-variant)' }}>Twitter</a>
        <a href="#" style={{ color: 'var(--on-surface-variant)' }}>GitHub</a>
        <a href="#" style={{ color: 'var(--on-surface-variant)' }}>LinkedIn</a>
      </div>
    </footer>
  );
};
