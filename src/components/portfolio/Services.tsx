import { motion } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Target,
  Palette,
  Puzzle,
  LayoutGrid,
  TrendingUp,
  Sparkles,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "User-Centered UI/UX Design",
    desc: "Clean, modern, intuitive designs focused on real user needs and business goals.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Design",
    desc: "Responsive websites, mobile apps, dashboards, SaaS products and landing pages.",
  },
  {
    icon: Target,
    title: "Improve User Experience",
    desc: "Simplify journeys, improve usability and increase customer satisfaction.",
  },
  {
    icon: Palette,
    title: "High-Fidelity UI Design",
    desc: "Pixel-perfect interfaces in Figma with strong visual hierarchy and consistency.",
  },
  {
    icon: Puzzle,
    title: "Wireframing & Prototyping",
    desc: "From low-fi wireframes to clickable prototypes for fast idea validation.",
  },
  {
    icon: LayoutGrid,
    title: "Design Systems",
    desc: "Reusable components and style guides for faster, consistent product growth.",
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Solutions",
    desc: "Designs that lift conversions, engagement and product performance.",
  },
  {
    icon: Sparkles,
    title: "Brand & Logo Design",
    desc: "Memorable identities, logo systems and visual language for growing brands.",
  },
  {
    icon: FileText,
    title: "Brochures, Flyers & CRM",
    desc: "Print collateral, marketing material and tailored CRM system design.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            ✦ Services
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight leading-[1]">
            What I can <span className="italic text-terracotta">do</span> for you.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            A toolkit built around clarity, craft and outcomes — from first sketch
            to shipped product, and everything around it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-cream p-8 md:p-10 hover:bg-cream-deep transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-ink text-cream flex items-center justify-center group-hover:bg-terracotta transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-sm text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          …and many more. <a href="#hire-me" className="text-foreground underline underline-offset-4 hover:text-terracotta transition-colors">Tell me what you need →</a>
        </motion.p>
      </div>
    </section>
  );
};
