import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Resume } from '../content/resume';

type ExperienceProps = Pick<Resume, 'experience'>;

export const Experience = ({ experience }: ExperienceProps) => (
  <section id="experience" className="relative px-4 py-12">
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex items-center gap-3">
        <span className="section-title">// Experience</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <div className="relative timeline space-y-8">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.dateRange}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="timeline-item"
          >
            <div className="glass card-hover relative overflow-hidden rounded-2xl border border-white/10 p-5">
              <div className="absolute inset-0 scanline" aria-hidden />
              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <p className="text-sm text-white/70">{item.location}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  {item.dateRange}
                </span>
              </div>
              <div className="glass-divider" />
              <div className="space-y-4 relative z-10">
                {item.roles.map((role) => (
                  <div key={role.title} className="space-y-2">
                    <h4 className="text-base font-semibold text-primary">{role.title}</h4>
                    <ul className="space-y-2 text-white/80">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

