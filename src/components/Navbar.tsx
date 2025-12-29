import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.25 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm uppercase tracking-[0.12em] text-white">
        <div className="flex items-center gap-3 font-semibold">
          <div className="h-10 w-10 rounded-full border border-primary/40 bg-primary/10 shadow-glow" />
          <span>Gilles S. Biagomba</span>
        </div>
        <nav
          aria-label="Primary"
          className="flex items-center gap-3 overflow-x-auto text-xs sm:text-sm md:gap-4"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative px-2 py-1 transition ${
                active === section.id ? 'text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              {section.label}
              {active === section.id && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
