import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "luvtakkar@gmail.com",
    href: "mailto:luvtakkar@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/luv-takkar",
    href: "https://www.linkedin.com/in/luv-takkar/",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 82888 42142",
    href: "tel:+918288842142",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden grain">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-6">
            ✦ Let's Collaborate
          </p>
          <h2 className="font-display text-6xl md:text-[9rem] leading-[0.9] font-light tracking-tight">
            Have an
            <br />
            <span className="italic text-terracotta">idea?</span> Let's
            <br />
            build it.
          </h2>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-cream/15 hover:border-terracotta hover:bg-cream/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <c.icon className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <ArrowUpRight className="w-5 h-5 text-cream/40 group-hover:text-cream group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <p className="text-xs uppercase tracking-widest text-cream/50 mb-2">{c.label}</p>
              <p className="font-display text-xl md:text-2xl font-light">{c.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Luv Takkar. Designed with intention.</p>
          <p className="font-display italic">Made with ✦ in India</p>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-terracotta opacity-20 blur-3xl pointer-events-none" />
    </section>
  );
};
