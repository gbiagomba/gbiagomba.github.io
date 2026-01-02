import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const getStoredTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined' || typeof window.localStorage?.getItem !== 'function') return 'dark';

  // Check if user has manually set a preference
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  // Otherwise, detect OS preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  // Default to dark
  return 'dark';
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getStoredTheme);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.localStorage?.setItem !== 'function') return;
    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  // Listen for OS theme changes (only if user hasn't manually set a preference)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-update if user hasn't manually set a preference
      const stored = window.localStorage?.getItem('theme');
      if (!stored) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white shadow-glow transition hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'light' ? 'Light' : 'Dark'} mode</span>
    </button>
  );
};
