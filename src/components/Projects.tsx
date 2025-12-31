import { motion } from 'framer-motion';
import { Code2, ExternalLink, Star } from 'lucide-react';
import { Resume } from '../content/resume';

type ProjectsProps = Pick<Resume, 'projects'>;

export const Projects = ({ projects }: ProjectsProps) => (
  <section id="projects" className="relative px-4 py-12">
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex items-center gap-3">
        <span className="section-title">// Projects</span>
        <div className="h-px flex-1 bg-gradient-to-r from-secondary/60 to-transparent" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => {
          const Component = project.url ? motion.a : motion.article;
          const linkProps = project.url
            ? { href: project.url, target: '_blank', rel: 'noreferrer' }
            : {};

          return (
            <Component
              key={project.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass card-hover relative overflow-hidden rounded-2xl border border-white/10 p-5 text-white"
              {...linkProps}
            >
              <div className="absolute inset-0 scanline" aria-hidden />
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/50 bg-secondary/10">
                    <Code2 className="text-secondary" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
                {project.url && <ExternalLink className="text-primary/60" size={16} />}
              </div>
              <p className="relative mt-3 text-sm text-white/80">{project.description}</p>
              {project.stars !== undefined && project.stars > 0 && (
                <div className="relative mt-3 flex items-center gap-1.5 text-xs text-warning">
                  <Star size={14} fill="currentColor" />
                  <span className="font-semibold">{project.stars}</span>
                </div>
              )}
            </Component>
          );
        })}
      </div>
    </div>
  </section>
);

