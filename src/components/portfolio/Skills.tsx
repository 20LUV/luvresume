import { motion } from "framer-motion";

const designSkills = [
  "User Research", "Wireframing", "Prototyping", "User Flow Creation",
  "Information Architecture", "Responsive Web Design", "Mobile App Design",
  "Interaction Design", "Usability Testing", "Visual Design",
  "Design Systems", "Developer Collaboration",
];

const softSkills = [
  "Communication",
  "Team Collaboration",
  "Problem Solving",
  "Critical Thinking",
  "Time Management",
  "Attention to Detail",
  "Fast Learning Ability",
];

// Brand-accurate logo marks (inline SVG) for each tool
const ToolLogo = ({ name, className = "" }: { name: string; className?: string }) => {
  switch (name) {
    case "Figma":
      return (
        <svg viewBox="0 0 38 57" className={className} aria-hidden>
          <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
          <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
          <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
          <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
          <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
        </svg>
      );
    case "Adobe XD":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
          <rect x="2" y="2" width="60" height="60" rx="12" fill="#2E001E" />
          <path fill="#FF61F6" d="M22.6 22h4.7l4.4 8.2 4.4-8.2h4.6l-6.6 11.7L40.9 46h-4.7l-4.6-8.7L27 46h-4.7l6.8-12.2L22.6 22Z" />
        </svg>
      );
    case "Sketch":
      return (
        <svg viewBox="0 0 64 56" className={className} aria-hidden>
          <path fill="#FDB300" d="m32 4 18 2-18 46Z" />
          <path fill="#EA6C00" d="M32 4 14 6l18 46Z" />
          <path fill="#FDAD00" d="M14 6 4 22l28 30Z" />
          <path fill="#FDAD00" d="M50 6l10 16-28 30Z" />
          <path fill="#FEEEB7" d="M4 22h56L32 52Z" />
        </svg>
      );
    case "Photoshop":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
          <rect x="2" y="2" width="60" height="60" rx="12" fill="#001E36" />
          <path fill="#31A8FF" d="M20 20h9.4c5 0 8.4 3 8.4 7.7 0 5-3.7 8-9 8h-4.4V46H20V20Zm4.4 11.7h4c2.6 0 4.3-1.4 4.3-3.9 0-2.4-1.6-3.7-4.2-3.7h-4.1v7.6Z" />
          <path fill="#31A8FF" d="M48.8 31.7c-1-.4-2.3-.8-3.4-.8-1.2 0-1.9.5-1.9 1.2 0 .8.5 1.2 2.6 2 3.3 1.1 4.7 2.7 4.7 5.1 0 3.6-2.7 5.7-6.6 5.7-1.8 0-3.6-.4-4.7-1v-3.8c1.4.8 3 1.2 4.4 1.2 1.4 0 2-.4 2-1.1 0-.8-.5-1.2-2.5-1.9-3.2-1.1-4.6-2.6-4.6-5.1 0-3.3 2.5-5.4 6.3-5.4 1.7 0 3.1.3 4 .7v3.4Z" />
        </svg>
      );
    case "Illustrator":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
          <rect x="2" y="2" width="60" height="60" rx="12" fill="#330000" />
          <path fill="#FF9A00" d="M27.7 38h-7l-1.5 5h-4.4l7.4-22h5.2l7.4 22h-4.6L27.7 38Zm-1-3.5-2.4-7.7-2.5 7.7h4.9ZM41 24.6c0 1.4-1 2.4-2.4 2.4S36 26 36 24.6c0-1.4 1-2.4 2.5-2.4S41 23.2 41 24.6Zm-4.4 4.5h4.1V46h-4.1V29.1Z" />
        </svg>
      );
    case "Canva":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
          <defs>
            <linearGradient id="canva-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00C4CC" />
              <stop offset="0.5" stopColor="#7D2AE7" />
              <stop offset="1" stopColor="#FF0099" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="30" fill="url(#canva-g)" />
          <path fill="#fff" d="M40.5 38c-1.7 3-4.6 4.7-7.7 4.7-4.6 0-7.6-3.5-7.6-8.5 0-6 3.6-10.7 8.5-10.7 2.3 0 4.1 1.1 4.1 3 0 1.5-1 2.4-2 2.4-1.1 0-1.9-.7-1.9-1.7 0-.7.4-1.2.9-1.5-.4-.3-1-.5-1.6-.5-2.6 0-4.4 3.4-4.4 7.6 0 3.4 1.7 5.5 4.2 5.5 2 0 3.8-1.3 5-3.4l1.5.3c.3.1.6.4.8.7l.2.1Z" />
        </svg>
      );
    default:
      return null;
  }
};

const tools = ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Canva"];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            ✦ Skills & Tools
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight">
            The <span className="italic">craft</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Skills column */}
          <div className="md:col-span-7 space-y-12">
            {/* Design skills */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-muted-foreground">Design Skills</h3>
              <div className="flex flex-wrap gap-3">
                {designSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="px-4 py-2 rounded-full border border-border bg-cream text-sm font-medium hover:border-terracotta hover:text-terracotta transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-muted-foreground">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="px-4 py-2 rounded-full border border-border bg-cream-deep text-sm font-medium hover:border-terracotta hover:text-terracotta transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl mb-6 text-muted-foreground">Tools</h3>
            <div className="space-y-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center justify-between gap-4 border-b border-border py-3 hover:border-terracotta transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-cream-deep group-hover:bg-cream transition-colors duration-300">
                      <ToolLogo name={tool} className="w-5 h-5" />
                    </span>
                    <span className="font-display text-2xl md:text-3xl font-light group-hover:italic group-hover:text-terracotta transition-all duration-300 truncate">
                      {tool}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono shrink-0">
                    0{i + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
