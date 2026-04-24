import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden grain">
      <div className="container relative">
        {/* Floating chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-cream-deep/60 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          Available for freelance · 2026
        </motion.div>

        <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] font-light tracking-tight text-balance">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Designing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block italic font-normal"
          >
            quietly <span className="text-terracotta">loud</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            experiences.
          </motion.span>
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-5 md:col-start-7"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Luv Takkar</span>, a UI/UX Designer
              crafting intuitive, user-friendly, and visually engaging digital products for web and
              mobile — from research to pixel-perfect handoff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream text-sm font-medium hover:bg-terracotta transition-all duration-500 shadow-soft hover:shadow-accent"
              >
                View selected work
                <span aria-hidden>↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition-colors duration-300"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute -right-32 top-32 w-96 h-96 rounded-full bg-gradient-warm opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-ochre opacity-10 blur-3xl pointer-events-none" />
    </section>
  );
};
