import { Calendar, Github, Mail } from 'lucide-react';
import { Resume } from '../content/resume';

type FooterProps = Pick<Resume, 'links' | 'email'>;

export const Footer = ({ links, email }: FooterProps) => {
  const github = links.find((link) => link.label.toLowerCase() === 'github');
  const linkedin = links.find((link) => link.label.toLowerCase() === 'linkedin');
  const calendly = links.find((link) => link.label.toLowerCase() === 'calendly');

  return (
    <footer id="contact" className="relative px-4 pb-12 pt-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-card backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">STATUS</p>
            <span className="status-pill">Online</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            {email && (
              <a className="chip" href={`mailto:${email}`}>
                <Mail size={16} /> {email}
              </a>
            )}
            {github?.href && (
              <a className="chip" href={github.href} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            )}
            {linkedin?.href ? (
              <a className="chip" href={linkedin.href} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : linkedin ? (
              <span className="chip">LinkedIn (URL not provided)</span>
            ) : null}
            {calendly?.href && (
              <a className="chip" href={calendly.href} target="_blank" rel="noreferrer">
                <Calendar size={16} /> Schedule
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

