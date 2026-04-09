import { useEffect, useRef } from "react";

export default function About() {
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
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="reveal font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-foreground mb-6 accent-underline pb-4">
              Passionate About
              <br />
              Visual Storytelling
            </h2>
            <div className="reveal w-16 h-0.5 bg-primary mb-8" />
            <p className="reveal font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              I'm Seenu Arjunan, a multidisciplinary Graphic Designer with over
              6 years of professional experience across print, digital, and
              interactive media. My work spans editorial design, brand identity,
              web UI, and character animation — each project driven by a deep
              belief that great design communicates and inspires.
            </p>
            <p className="reveal font-body text-muted-foreground text-base leading-relaxed mb-8">
              Specializing in illustration, poster design, newspaper page
              layout, and character rigging, I bring a meticulous craft and
              creative energy to every brief. My goal is to push boundaries of
              visual communication while delivering polished, production-ready
              work.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "4", label: "Companies" },
                { value: "∞", label: "Passion for Design" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-sm" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-muted rounded-sm overflow-hidden shadow-card-dark">
                {/* Abstract design element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display font-bold text-6xl text-primary mb-2">
                      SA
                    </div>
                    <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
                    <div className="font-body text-muted-foreground text-sm tracking-widest uppercase">
                      Graphic Designer
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {["Illustrator", "InDesign", "Figma", "Photoshop"].map(
                        (tool) => (
                          <span
                            key={tool}
                            className="font-body text-xs text-primary border border-primary/40 px-2 py-1 rounded-sm"
                          >
                            {tool}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/40 rounded-tr-sm" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/40 rounded-bl-sm" />
              </div>
              {/* Gold accent dot */}
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full shadow-gold-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
