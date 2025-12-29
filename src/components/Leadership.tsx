import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

type LeadershipProps = {
  items: string[];
};

export const Leadership = ({ items }: LeadershipProps) => (
  <section id="leadership" className="relative px-4 py-12">
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex items-center gap-3">
        <span className="section-title">// Leadership & Mentorship</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass card-hover relative overflow-hidden rounded-2xl border border-white/10 p-6"
      >
        <div className="absolute inset-0 scanline" aria-hidden />
        <div className="relative space-y-3 text-white/80">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Shield className="mt-1 h-4 w-4 text-secondary" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

