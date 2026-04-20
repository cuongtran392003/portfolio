"use client";
import React from 'react';
import styles from './TechMarquee.module.css';
import { Layers, Database, Code, Shield, Smartphone, Server, Package, Flame } from 'lucide-react';

export const TechMarquee = () => {
  const techStack = [
    { name: "React Native", icon: <Smartphone /> },
    { name: "Expo", icon: <Package /> },
    { name: "Firebase", icon: <Flame /> },
    { name: "NestJS", icon: <Server /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Zustand", icon: <Layers /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "Logto SSO", icon: <Shield /> },
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* We double the list to create the seamless infinite scroll effect */}
        {[...techStack, ...techStack].map((tech, idx) => (
          <div className={styles.techItem} key={idx}>
            <span className={styles.icon}>{tech.icon}</span>
            <span className={styles.name}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
