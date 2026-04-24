import { create } from 'zustand';

interface AppState {
  language: 'en' | 'vi';
  theme: 'dark' | 'light';
  persona: 'mobile' | 'web';
  setLanguage: (lang: 'en' | 'vi') => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setPersona: (persona: 'mobile' | 'web') => void;
}

export const useStore = create<AppState>((set) => ({
  language: 'en',
  theme: 'dark',
  persona: 'mobile',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'vi' : 'en' })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  setPersona: (persona) => set({ persona }),
}));
