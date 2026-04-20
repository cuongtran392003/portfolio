import { create } from 'zustand';

interface AppState {
  language: 'en' | 'vi';
  theme: 'dark' | 'light';
  setLanguage: (lang: 'en' | 'vi') => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set) => ({
  language: 'en',
  theme: 'dark',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'vi' : 'en' })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
