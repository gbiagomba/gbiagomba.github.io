import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Resume } from '../content/resume';

type EducationProps = Pick<Resume, 'education'>;

export const Education = ({ education }: EducationProps) => (
  <section id="education" className="relative px-4 py-12">
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex items-center gap-3">
        <span className="section-title">// Education</span>
        <div className="h-px flex-1 bg-gradient-to-r from-secondary/60 to-transparent" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, idx) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass card-hover relative overflow-hidden rounded-2xl border border-white/10 p-5 text-white"
          >
            <div className="absolute inset-0 scanline" aria-hidden />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                <GraduationCap size={18} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.school}</h3>
                <p className="text-sm text-white/70">{item.location}</p>
              </div>
            </div>
            <div className="relative mt-3 space-y-1 text-sm text-white/80">
              <p className="font-semibold text-primary">{item.degree}</p>
              <p>{item.date}</p>
              {item.notes && (
                <ul className="mt-2 space-y-1">
                  {item.notes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

