"use client";
import React from 'react';
import { useStore } from '@/lib/store';
import { Smartphone, Monitor } from 'lucide-react';

export const PersonaToggle = () => {
  const { persona, setPersona } = useStore();

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        background: 'var(--surface-container-low)', 
        borderRadius: 'var(--radius-full)', 
        padding: '4px',
        border: 'var(--border-ghost)',
      }}
    >
      <button
        onClick={() => setPersona('mobile')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          background: persona === 'mobile' ? 'var(--primary)' : 'transparent',
          color: persona === 'mobile' ? '#000' : 'var(--on-surface-variant)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-inter)',
          fontSize: '0.85rem',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
      >
        <Smartphone size={16} />
        Mobile
      </button>
      <button
        onClick={() => setPersona('web')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          background: persona === 'web' ? 'var(--primary)' : 'transparent',
          color: persona === 'web' ? '#000' : 'var(--on-surface-variant)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-inter)',
          fontSize: '0.85rem',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
      >
        <Monitor size={16} />
        Web
      </button>
    </div>
  );
};
