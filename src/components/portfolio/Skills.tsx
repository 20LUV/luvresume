import { motion } from "framer-motion";

const designSkills = [
  "User Research", "Wireframing", "Prototyping", "User Flow Creation",
  "Information Architecture", "Responsive Web Design", "Mobile App Design",
  "Interaction Design", "Usability Testing", "Visual Design",
  "Design Systems", "Problem Solving", "Developer Collaboration",
];

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
          {/* Skills */}
          <div className="md:col-span-7">
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
                  className="group flex items-baseline justify-between border-b border-border py-3 hover:border-terracotta transition-colors duration-300"
                >
                  <span className="font-display text-2xl md:text-3xl font-light group-hover:italic group-hover:text-terracotta transition-all duration-300">
                    {tool}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
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
