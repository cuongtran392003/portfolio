"use client";
import React from 'react';
import styles from './TechMarquee.module.css';
import { Layers, Database, Code, Shield, Smartphone, Server, Package, Flame, Cloud, Cpu } from 'lucide-react';
import { useStore } from '@/lib/store';

export const TechMarquee = () => {
  const { persona } = useStore();

  const mobileStack = [
    { name: "React Native", icon: <Smartphone /> },
    { name: "Expo", icon: <Package /> },
    { name: "Firebase", icon: <Flame /> },
    { name: "NestJS", icon: <Server /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Zustand", icon: <Layers /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "Logto SSO", icon: <Shield /> },
  ];

  const webStack = [
    { name: "React / Next.js", icon: <Layers /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Tailwind CSS", icon: <Package /> },
    { name: "Node / NestJS", icon: <Server /> },
    { name: "MySQL / MongoDB", icon: <Database /> },
    { name: "PHP / WordPress", icon: <Cloud /> },
    { name: "Docker", icon: <Cpu /> },
    { name: "React Query", icon: <Layers /> },
  ];

  const techStack = persona === 'mobile' ? mobileStack : webStack;

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
