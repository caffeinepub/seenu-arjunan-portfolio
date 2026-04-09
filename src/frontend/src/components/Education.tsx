import { useEffect, useRef } from "react";

const educationData = [
  {
    institution: "Image Multimedia",
    degree: "Graphic & Web Designing",
    qualification: "C-Tech Certified Course",
    period: "2014 – 2015",
    icon: "🎨",
    highlights: [
      "Graphic Design Fundamentals",
      "Web Design & Development",
      "Digital Illustration",
      "Print Media Production",
    ],
  },
  {
    institution: "Tamilnadu Open University",
    degree: "Bachelor of Business Administration",
    qualification: "BBA Degree",
    period: "2016 – 2019",
    icon: "🎓",
    highlights: [
      "Business Strategy & Management",
      "Marketing & Branding Principles",
      "Organizational Behavior",
      "Communication & Presentation",
    ],
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const reveals = Array.from(e.target.querySelectorAll(".reveal"));
            for (const [i, el] of reveals.entries()) {
              (el as HTMLElement).style.transitionDelay = `${i * 0.12}s`;
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
    <section id="education" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Background
          </p>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Education
          </h2>
          <div className="reveal w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              data-ocid={`education-card-${index}`}
              className="reveal group bg-card border border-border rounded-sm p-8 hover:border-primary/40 hover:shadow-gold-glow transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              {/* Period badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-xs text-primary border border-primary/40 px-3 py-1 rounded-sm tracking-wider">
                  {edu.period}
                </span>
                <span className="text-2xl">{edu.icon}</span>
              </div>

              {/* Degree info */}
              <div className="mb-2">
                <span className="font-body text-xs text-primary uppercase tracking-widest">
                  {edu.qualification}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="font-body text-muted-foreground text-sm font-medium mb-6">
                {edu.institution}
              </p>

              {/* Divider */}
              <div className="w-full h-0.5 bg-border mb-6" />

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Bottom decoration */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-primary/20 rounded-br-sm pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
