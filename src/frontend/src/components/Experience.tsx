import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2017 – 2018",
    title: "Web Designer, Illustrator & Animator",
    company: "Hmax Technologies",
    location: "Pondicherry",
    responsibilities: [
      "Designed and sliced web layouts for client projects",
      "Built and maintained CSS stylesheets for responsive interfaces",
      "Created character rigging for interactive animations",
      "Synced voice-over timings with animated sequences",
    ],
  },
  {
    period: "2018 – 2021",
    title: "Page Designer",
    company: "The New Indian Express",
    location: "Chennai",
    responsibilities: [
      "Designed immersive posters for national ceremonies and events",
      "Created aesthetic page layouts for advertisements across South Indian states",
      "Maintained visual consistency across print editions",
      "Collaborated with editorial team on high-impact feature spreads",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Senior Design Associate",
    company: "AffinityX",
    location: "Pune",
    responsibilities: [
      "Led page planning and layout design for print and digital publications",
      "Created expressive illustrator character designs for brand campaigns",
      "Developed UI design deliverables for digital product teams",
      "Mentored junior designers on design principles and software workflows",
    ],
  },
  {
    period: "2023 – Present",
    title: "Senior Design Associate",
    company: "Mi Lifestyle Marketing Global Pvt. Ltd.",
    location: "Chennai",
    responsibilities: [
      "Designed illustrator characters for marketing campaigns",
      "Created comprehensive UI design systems and components",
      "Developed print and digital poster series for product launches",
      "Designed magazine layouts and editorial spreads for in-house publications",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const reveals = Array.from(e.target.querySelectorAll(".reveal"));
            for (const [i, el] of reveals.entries()) {
              (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
              el.classList.add("revealed");
            }
          }
        }
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Career
          </p>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Work Experience
          </h2>
          <div className="reveal w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.period}
                  data-ocid={`experience-item-${index}`}
                  className={`reveal relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ml-10 md:ml-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-card border border-border rounded-sm p-6 shadow-card-dark hover:border-primary/30 hover:shadow-gold-glow transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-body text-xs text-primary border border-primary/40 px-3 py-1 rounded-sm tracking-wider">
                          {exp.period}
                        </span>
                        <span className="font-body text-xs text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-body text-primary font-medium text-sm mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1 shrink-0">
                              •
                            </span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-gold-glow border-2 border-background" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
