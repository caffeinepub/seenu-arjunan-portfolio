import { useEffect, useRef } from "react";

const skills = [
  {
    name: "Adobe Photoshop",
    icon: "Ps",
    category: "Photo & Compositing",
    level: 80,
  },
  {
    name: "Adobe Illustrator",
    icon: "Ai",
    category: "Vector & Illustration",
    level: 90,
  },
  {
    name: "Adobe InDesign",
    icon: "Id",
    category: "Print & Layout",
    level: 65,
  },
  {
    name: "Figma",
    icon: "Fg",
    category: "UI/UX Design",
    level: 80,
  },
  {
    name: "Adobe Premiere Pro",
    icon: "Pr",
    category: "Video & Animation",
    level: 50,
  },
  {
    name: "HTML / CSS",
    icon: "</>",
    category: "Web Development",
    level: 50,
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const reveals = Array.from(e.target.querySelectorAll(".reveal"));
            for (const [i, el] of reveals.entries()) {
              (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
              el.classList.add("revealed");
            }
          }
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Skills Showcase
          </h2>
          <div className="reveal w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="reveal font-body text-muted-foreground max-w-xl mx-auto text-base">
            A versatile toolkit spanning print, digital, motion, and interactive
            design disciplines.
          </p>
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="skills-grid"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              data-ocid={`skill-${skill.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="reveal group bg-background border border-border rounded-sm p-6 hover:border-primary/50 hover:shadow-gold-glow transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4 mb-5">
                {/* Icon badge */}
                <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <span className="font-display font-bold text-base text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {skill.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-foreground text-base mb-1 truncate">
                    {skill.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-xs uppercase tracking-wider">
                    {skill.category}
                  </p>
                </div>
              </div>

              {/* Skill bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-xs text-muted-foreground">
                    Proficiency
                  </span>
                  <span className="font-display font-bold text-sm text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
