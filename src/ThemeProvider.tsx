import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const themeStyle = document.getElementById('theme-style');
    if (themeStyle) {
      themeStyle.setAttribute('href', `/themes/${theme}.css`);
    }
  }, [theme]);

  return { theme, toggleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light')) };
};
