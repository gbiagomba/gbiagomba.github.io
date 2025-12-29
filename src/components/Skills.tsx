import { motion } from 'framer-motion';
import { Resume } from '../content/resume';

type SkillsProps = Pick<Resume, 'technologySummary'>;

const SectionBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="chip">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const Skills = ({ technologySummary }: SkillsProps) => {
  const languageChips = technologySummary.languages.flatMap((group) =>
    group.items.map((item) => `${group.level}: ${item}`)
  );

  return (
    <section id="skills" className="relative px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center gap-3">
          <span className="section-title">// Skills</span>
          <div className="h-px flex-1 bg-gradient-to-r from-secondary/60 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass card-hover relative grid gap-8 rounded-2xl border border-white/10 p-6 md:grid-cols-2"
        >
          <div className="space-y-6">
            <SectionBlock title="Certifications" items={technologySummary.certifications} />
            <SectionBlock title="Systems" items={technologySummary.systems} />
            <SectionBlock title="Spoken Languages" items={technologySummary.spokenLanguages} />
          </div>
          <div className="space-y-6">
            <SectionBlock title="Languages" items={languageChips} />
            <SectionBlock title="Software & Tooling" items={technologySummary.software} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass card-hover relative grid gap-6 rounded-2xl border border-white/10 p-6"
        >
          <SectionBlock title="Core Skills" items={technologySummary.skills} />
          <SectionBlock title="Laws & Regulations" items={technologySummary.lawsRegulations} />
        </motion.div>
      </div>
    </section>
  );
};

