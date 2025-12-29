import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { resume } from './content/resume';

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.2),transparent_35%)]" />
      </div>
      <Navbar />
      <main className="relative z-10 space-y-6 pb-16">
        <Hero
          name={resume.name}
          headline={resume.headline}
          location={resume.location}
          summary={resume.summary}
          links={resume.links}
          email={resume.email}
        />
        <About summary={resume.summary} />
        <Skills technologySummary={resume.technologySummary} />
        <Experience experience={resume.experience} />
        <Projects projects={resume.projects} />
        <Leadership items={resume.leadership} />
        <Education education={resume.education} />
        <motion.section
          id="call-to-action"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 p-6 shadow-glow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Ready for mission-critical work</p>
                <h3 className="text-2xl font-semibold text-white">Let’s secure what matters next.</h3>
              </div>
              {resume.email && (
                <a
                  href={`mailto:${resume.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
                >
                  Contact
                </a>
              )}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer links={resume.links} email={resume.email} />
    </div>
  );
};

export default App;

