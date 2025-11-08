/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'es' | 'en';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Por defecto, arrancar en oscuro para coincidir con el script de index.html y evitar FOUC
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('av-skallet-theme') as Theme;
    const savedLanguage = localStorage.getItem('av-skallet-language') as Language;

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguageState(savedLanguage);
  }, []);

  useEffect(() => {
    // Apply theme to document without eliminar otras clases
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('av-skallet-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('av-skallet-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};