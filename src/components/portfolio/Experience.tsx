import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Galamine AI",
    period: "Jul 2025 — Present",
    description:
      "Designing AI-powered product experiences end-to-end — from research and flows to polished, shipped interfaces in close collaboration with engineering.",
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream-deep">
      <div className="container">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            ✦ Experience
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight">
            Where I've <span className="italic">worked</span>.
          </h2>
        </div>

        <div className="space-y-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 border-t border-border hover:bg-cream/40 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  {exp.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                  )}
                  {exp.period}
                </div>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight group-hover:italic group-hover:text-terracotta transition-all duration-500">
                  {exp.role}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>

              <div className="md:col-span-3 md:text-right">
                <div className="inline-flex items-center gap-2 text-sm font-medium">
                  <span>{exp.company}</span>
                  <span aria-hidden className="text-terracotta">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};
