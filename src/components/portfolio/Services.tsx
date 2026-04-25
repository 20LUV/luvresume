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
import workTimer from "@/assets/projects/work-timer.jpg";
import financialSanctuary from "@/assets/projects/financial-sanctuary.jpg";
import findDoctor from "@/assets/projects/find-doctor.jpg";
import ngo from "@/assets/projects/ngo.jpg";
import memoneet from "@/assets/projects/memoneet.jpg";
import grocers from "@/assets/projects/grocers.jpg";
import ecommerce from "@/assets/projects/ecommerce.jpg";
import galamine from "@/assets/projects/galamine.jpg";

const services = [
  {
    icon: Rocket,
    title: "User-Centered UI/UX Design",
    desc: "Clean, modern, intuitive designs focused on real user needs and business goals.",
    image: workTimer,
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Design",
    desc: "Responsive websites, mobile apps, dashboards, SaaS products and landing pages.",
    image: findDoctor,
  },
  {
    icon: Target,
    title: "Improve User Experience",
    desc: "Simplify journeys, improve usability and increase customer satisfaction.",
    image: memoneet,
  },
  {
    icon: Palette,
    title: "High-Fidelity UI Design",
    desc: "Pixel-perfect interfaces in Figma with strong visual hierarchy and consistency.",
    image: financialSanctuary,
  },
  {
    icon: Puzzle,
    title: "Wireframing & Prototyping",
    desc: "From low-fi wireframes to clickable prototypes for fast idea validation.",
    image: ecommerce,
  },
  {
    icon: LayoutGrid,
    title: "Design Systems",
    desc: "Reusable components and style guides for faster, consistent product growth.",
    image: galamine,
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Solutions",
    desc: "Designs that lift conversions, engagement and product performance.",
    image: grocers,
  },
  {
    icon: Sparkles,
    title: "Brand & Logo Design",
    desc: "Memorable identities, logo systems and visual language for growing brands.",
    image: ngo,
  },
  {
    icon: FileText,
    title: "Brochures, Flyers & CRM",
    desc: "Print collateral, marketing material and tailored CRM system design.",
    image: workTimer,
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
                className="group relative bg-cream hover:bg-cream-deep transition-colors duration-500 flex flex-col"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-deep">
                  <img
                    src={s.image}
                    alt={`${s.title} — example work`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-cream/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-terracotta group-hover:text-cream transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="absolute top-4 right-4 font-display text-sm text-cream/90 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Copy */}
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight leading-snug mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
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
