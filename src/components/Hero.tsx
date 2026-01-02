import { motion } from 'framer-motion';
import { ArrowDownRight, Calendar, Download, Github, Mail, MapPin } from 'lucide-react';
import { Resume } from '../content/resume';

type HeroProps = Pick<Resume, 'name' | 'headline' | 'location' | 'summary' | 'links' | 'email'>;

export const Hero = ({ name, headline, location, summary, links, email }: HeroProps) => {
  const githubLink = links.find((link) => link.label.toLowerCase() === 'github')?.href;
  const linkedin = links.find((link) => link.label.toLowerCase() === 'linkedin');
  const calendly = links.find((link) => link.label.toLowerCase() === 'calendly');

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-12">
      <div className="absolute inset-0 mask-fade" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Security Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl font-semibold text-primary"
            >
              {headline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-white/80"
            >
              <MapPin size={18} />
              <span>{location}</span>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-2 space-y-2 text-base text-white/70"
            >
              {summary.map((line) => (
                <li key={line} className="flex gap-2">
                  <ArrowDownRight className="mt-1 h-4 w-4 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {email && (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
                  href={`mailto:${email}`}
                >
                  <Mail size={16} /> Email
                </a>
              )}
              {githubLink && (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {linkedin?.href ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              ) : linkedin ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  LinkedIn (URL not provided)
                </span>
              ) : null}
              {calendly?.href && (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  href={calendly.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar size={16} /> Schedule
                </a>
              )}
              <a
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5"
                href="/Gilles_Biagomba_Resume_2025v1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Download Resume
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm text-white shadow-card"
          >
            <div className="absolute inset-0 scanline" aria-hidden />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/60">
                <span>System Status</span>
                <span className="status-pill">Online</span>
              </div>
              <div className="glass-divider" />
              <div className="space-y-2 font-mono text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span>IAM</span>
                  <span className="text-primary">RBAC Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI/ML</span>
                  <span className="text-secondary">Threat Modeling</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AppSec</span>
                  <span className="text-primary">SAST | DAST | IAST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Detection</span>
                  <span className="text-secondary">Red ↔ Blue</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

