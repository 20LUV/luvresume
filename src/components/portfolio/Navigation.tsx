import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Hire me", href: "#hire-me" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // active section detection
      const sections = links.map((l) => l.href.replace("#", ""));
      const offset = window.innerHeight * 0.35;
      let current = "#top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3 md:px-6"
      >
        <nav
          className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 rounded-full border ${
            scrolled
              ? "max-w-3xl bg-cream/85 border-border/60 shadow-soft backdrop-blur-xl py-2 pl-5 pr-2"
              : "max-w-5xl bg-cream/60 border-border/30 backdrop-blur-md py-2.5 pl-5 pr-2"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg md:text-xl font-semibold tracking-tight shrink-0"
          >
            Luv<span className="text-terracotta">.</span>
            <span className="hidden md:inline text-foreground/40 font-light">
              {" "}Takkar
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground/8 border border-border/50"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="mailto:luvtakkar@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium pl-4 pr-3 py-2 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors duration-300"
          >
            Let's talk
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-cream"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-cream/95 backdrop-blur-xl pt-24 px-6"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-1"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-border/50 font-display text-3xl font-light tracking-tight"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="w-5 h-5 text-terracotta"
                      strokeWidth={1.5}
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="mailto:luvtakkar@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream text-sm font-medium"
            >
              Let's talk
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
