const items = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Design Systems",
  "Interaction Design",
  "Mobile First",
  "Usability Testing",
];

export const Marquee = () => {
  return (
    <section className="relative py-10 border-y border-border bg-ink text-cream overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-light italic px-8 flex items-center gap-8"
          >
            {item}
            <span className="text-terracotta not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
