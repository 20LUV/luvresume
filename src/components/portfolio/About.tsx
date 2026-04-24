import { motion } from "framer-motion";
import profileImg from "@/assets/luv-profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-deep">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            ✦ About
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight leading-[1]">
            A designer who <span className="italic text-terracotta">listens</span> first.
          </h2>

          {/* Portrait */}
          <div className="mt-10 relative max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-warm opacity-30 blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-soft aspect-[4/5]">
              <img
                src={profileImg}
                alt="Portrait of Luv Takkar, UI/UX Designer"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-ink text-cream text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full font-medium shadow-soft">
              ✦ That's me
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            I'm a creative and detail-oriented UI/UX Designer with a passion for designing
            intuitive, user-friendly, and visually engaging digital experiences.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            With experience in user research, wireframing, prototyping and responsive design for
            web and mobile, I focus on solving real user problems through clean, functional, and
            impactful designs — all while collaborating effectively with cross-functional teams
            to ship products that feel right.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { num: "20+", label: "Projects shipped" },
              { num: "1+", label: "Years designing" },
              { num: "100%", label: "Care per pixel" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-medium text-terracotta">
                  {s.num}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
