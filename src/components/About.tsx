import { motion } from 'framer-motion';

type AboutProps = {
  summary: string[];
};

export const About = ({ summary }: AboutProps) => (
  <section id="about" className="relative px-4 py-12">
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center gap-3">
        <span className="section-title">// About</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {summary.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="glass card-hover relative overflow-hidden rounded-xl border border-white/10 p-4 text-white/80"
          >
            <div className="absolute inset-0 scanline" aria-hidden />
            <p className="relative">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

