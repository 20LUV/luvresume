import { motion } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  link: string;
  year: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Work Timer",
    category: "Productivity App",
    description: "A focused timer experience designed to help professionals manage deep work sessions with minimal friction.",
    link: "https://www.figma.com/design/RJ80R9OOUOLrBP9Oi4iuoa/Work-Timer?node-id=0-1&p=f&t=kaWxWBF1LVrXZgPM-0",
    year: "2025",
    accent: "from-terracotta to-ochre",
  },
  {
    title: "Financial Sanctuary",
    category: "Fintech · Mobile",
    description: "Personal finance app concept focused on calm, mindful money management through clean data visualization.",
    link: "https://www.figma.com/design/O8HiQogC6kwe2YyVDcnSeY/Financial-Santuary?node-id=0-1&p=f&t=3NG93Drxf0x5sJPO-0",
    year: "2025",
    accent: "from-sage to-ochre",
  },
  {
    title: "Find Your Doctor",
    category: "Healthcare · Web",
    description: "End-to-end UX for discovering and booking trusted doctors with verified reviews and seamless scheduling.",
    link: "https://www.figma.com/design/rfnjbI2uKTi55LMiboCd46/Find-your-Doctor-Project?node-id=0-1&p=f&t=dxfQFhhuwPMAnvDs-0",
    year: "2024",
    accent: "from-terracotta to-terracotta-glow",
  },
  {
    title: "Women NGO Redesign",
    category: "Non-profit · Web",
    description: "Landing page redesign for a women-focused NGO — brand-driven storytelling with clear donation flows.",
    link: "https://www.figma.com/design/c8O01wDJtYxX42U53EX3GQ/NGO-WEB-UI?node-id=88-24&t=1ttDVyUgKtpVq6a5-0",
    year: "2024",
    accent: "from-ochre to-terracotta",
  },
  {
    title: "E-commerce Shopping App",
    category: "Retail · Mobile",
    description: "Mobile shopping experience with smart product discovery, fluid micro-interactions, and frictionless checkout.",
    link: "https://www.figma.com/design/bLLeImrzL6YfHYSrJ7ducx/e-commerce-app?node-id=0-1&p=f&t=HI91meNd3uRV5jLs-0",
    year: "2024",
    accent: "from-terracotta-glow to-ochre",
  },
  {
    title: "Grocers Going",
    category: "Grocery · Mobile",
    description: "On-demand grocery app focused on fast reorders, fresh-first browsing, and delightful empty states.",
    link: "https://www.figma.com/design/NuxQADOsT0ljEA4tmAx0yL/Grocers-Going?node-id=0-1&p=f&t=ms1jx34saXS3bH0N-0",
    year: "2024",
    accent: "from-sage to-terracotta",
  },
  {
    title: "Galamine Corecart",
    category: "E-commerce · Web",
    description: "Full e-commerce platform redesign — category architecture, PDP, and conversion-led checkout.",
    link: "https://www.figma.com/design/9FugscFLAleakrapGxSQqQ/Galamine-Corecart-Project?t=ms1jx34saXS3bH0N-0",
    year: "2024",
    accent: "from-ochre to-terracotta-glow",
  },
  {
    title: "Memoneet AI",
    category: "AI · EdTech",
    description: "AI-assisted study companion app with intelligent note structuring and personalized revision flows.",
    link: "https://www.figma.com/design/7hEKTLke8N8JlINI6cY7cn/Memoneet?t=ms1jx34saXS3bH0N-0",
    year: "2025",
    accent: "from-terracotta to-sage",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              ✦ Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight">
              Recent <span className="italic">projects</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into products I've shaped — from research and wireframes to polished, shipped interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block rounded-2xl bg-cream-deep border border-border overflow-hidden hover:shadow-card transition-all duration-700"
            >
              {/* Visual */}
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 grain opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl md:text-8xl font-light text-cream/90 italic group-hover:scale-110 transition-transform duration-1000">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-cream/90 backdrop-blur text-xs text-foreground font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ink/30 backdrop-blur text-xs text-cream font-medium">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight group-hover:text-terracotta transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" aria-hidden>
                    ↗
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground italic">
          …and many more in the studio.
        </p>
      </div>
    </section>
  );
};
