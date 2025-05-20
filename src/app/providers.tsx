'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme context
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Language context
type LanguageContextType = {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Combined providers
export function Providers({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={isDarkMode ? 'dark' : 'light'}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}