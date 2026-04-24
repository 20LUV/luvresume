import { motion } from "framer-motion";
import workTimerImg from "@/assets/projects/work-timer.jpg";
import financialImg from "@/assets/projects/financial-sanctuary.jpg";
import doctorImg from "@/assets/projects/find-doctor.jpg";
import ngoImg from "@/assets/projects/ngo.jpg";
import ecommerceImg from "@/assets/projects/ecommerce.jpg";
import grocersImg from "@/assets/projects/grocers.jpg";
import galamineImg from "@/assets/projects/galamine.jpg";
import memoneetImg from "@/assets/projects/memoneet.jpg";

type Project = {
  title: string;
  category: string;
  description: string;
  link: string;
  year: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Work Timer",
    category: "Productivity · Web App",
    description:
      "A focused, distraction-free timer that helps professionals run deep work sessions. Designed around a quiet single-task interface, gentle session transitions and minimal cognitive overhead.",
    link: "https://www.figma.com/design/RJ80R9OOUOLrBP9Oi4iuoa/Work-Timer?node-id=0-1&p=f&t=kaWxWBF1LVrXZgPM-0",
    year: "2025",
    image: workTimerImg,
    tags: ["UX", "UI", "Prototype"],
  },
  {
    title: "Financial Sanctuary",
    category: "Fintech · Mobile",
    description:
      "A mindful personal finance app concept. Calm dashboards, breathing-room layouts and clean data visualisation make budgeting feel less stressful and more intentional.",
    link: "https://www.figma.com/design/O8HiQogC6kwe2YyVDcnSeY/Financial-Santuary?node-id=0-1&p=f&t=3NG93Drxf0x5sJPO-0",
    year: "2025",
    image: financialImg,
    tags: ["Research", "iOS", "Design System"],
  },
  {
    title: "Find Your Doctor",
    category: "Healthcare · Web",
    description:
      "End-to-end UX for discovering and booking trusted doctors — verified profiles, transparent reviews, and a friction-free scheduling flow that earns user trust at every step.",
    link: "https://www.figma.com/design/rfnjbI2uKTi55LMiboCd46/Find-your-Doctor-Project?node-id=0-1&p=f&t=dxfQFhhuwPMAnvDs-0",
    year: "2024",
    image: doctorImg,
    tags: ["UX", "Booking flow", "Web"],
  },
  {
    title: "Women NGO Redesign",
    category: "Non-profit · Web",
    description:
      "A complete landing page redesign for a women-focused NGO. Story-led hero, refreshed brand voice, and a frictionless donation path that converts empathy into action.",
    link: "https://www.figma.com/design/c8O01wDJtYxX42U53EX3GQ/NGO-WEB-UI?node-id=88-24&t=1ttDVyUgKtpVq6a5-0",
    year: "2024",
    image: ngoImg,
    tags: ["Branding", "Landing", "Donation flow"],
  },
  {
    title: "E-commerce Shopping App",
    category: "Retail · Mobile",
    description:
      "A mobile shopping experience built around fast discovery and frictionless checkout. Smart filters, fluid micro-interactions and a delightful empty-cart story.",
    link: "https://www.figma.com/design/bLLeImrzL6YfHYSrJ7ducx/e-commerce-app?node-id=0-1&p=f&t=HI91meNd3uRV5jLs-0",
    year: "2024",
    image: ecommerceImg,
    tags: ["iOS", "Checkout", "Micro-interactions"],
  },
  {
    title: "Grocers Going",
    category: "Grocery · Mobile",
    description:
      "On-demand grocery app focused on the daily ritual — one-tap reorder, fresh-first browsing, and warm empty states that make a chore feel like a small joy.",
    link: "https://www.figma.com/design/NuxQADOsT0ljEA4tmAx0yL/Grocers-Going?node-id=0-1&p=f&t=ms1jx34saXS3bH0N-0",
    year: "2024",
    image: grocersImg,
    tags: ["Mobile", "Reorder UX", "Visual"],
  },
  {
    title: "Galamine Corecart",
    category: "E-commerce · Web",
    description:
      "Full e-commerce platform redesign — rebuilt category architecture, a punchier PDP, and a conversion-led checkout that lifts both clarity and confidence.",
    link: "https://www.figma.com/design/9FugscFLAleakrapGxSQqQ/Galamine-Corecart-Project?t=ms1jx34saXS3bH0N-0",
    year: "2024",
    image: galamineImg,
    tags: ["Web", "PDP", "Conversion"],
  },
  {
    title: "Memoneet AI",
    category: "AI · EdTech",
    description:
      "An AI-assisted study companion. Intelligent note structuring, personalised revision flows, and a calm conversational UI that turns chaotic prep into a clear plan.",
    link: "https://www.figma.com/design/7hEKTLke8N8JlINI6cY7cn/Memoneet?t=ms1jx34saXS3bH0N-0",
    year: "2025",
    image: memoneetImg,
    tags: ["AI", "Mobile", "EdTech"],
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
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-cream/90 backdrop-blur text-xs text-foreground font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ink/40 backdrop-blur text-xs text-cream font-medium">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight group-hover:text-terracotta transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span
                    className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
