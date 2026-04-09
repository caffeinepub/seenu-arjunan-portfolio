import { useEffect, useState } from "react";

const roles = [
  "Graphic Designer",
  "Web Designer",
  "Illustrator",
  "Animator",
  "UI Designer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentRole((r) => (r + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "oklch(0.08 0 0)" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Geometric decorative elements — left side only, away from photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/15 rotate-12 rounded-sm" />
        <div className="absolute top-1/2 left-0 w-1 h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Gold gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-0 w-full">
        {/*
          Mobile: flex-col-reverse so photo appears above text visually.
          Desktop: flex-row with text left, photo right.
          Photo is order-1 (first in DOM / visual on mobile), text is order-2.
          On lg+: photo is order-2 (right), text is order-1 (left).
        */}
        <div className="flex flex-col-reverse lg:flex-row items-end lg:items-stretch gap-8 lg:gap-0 min-h-[calc(100vh-6rem)]">
          {/* Left — Text Content */}
          <div className="flex-1 flex flex-col justify-center pb-16 order-2 lg:order-1 lg:pr-12">
            {/* Name */}
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-4 animate-fade-in-up">
              Seenu
              <br />
              <span className="text-primary">Arjunan.</span>
            </h1>

            {/* Animated role */}
            <div className="h-12 md:h-16 flex items-center mb-6">
              <span
                className={`font-display font-semibold text-2xl md:text-4xl text-muted-foreground transition-all duration-400 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                style={{ transition: "opacity 0.4s, transform 0.4s" }}
                aria-live="polite"
              >
                {roles[currentRole]}
              </span>
            </div>

            {/* Tagline */}
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-10 animate-fade-in">
              Crafting compelling visual experiences with 6+ years of expertise
              in illustration, poster design, newspaper layout, and character
              animation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4" data-ocid="hero-ctas">
              <a
                href="https://www.behance.net/ashok_arjunan1"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero-view-work"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/90 hover:shadow-gold-glow transition-all duration-300 rounded-sm"
              >
                View My Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <button
                type="button"
                data-ocid="hero-contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 border border-primary/60 text-primary font-display font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/10 hover:border-primary hover:shadow-gold-glow transition-all duration-300 rounded-sm"
              >
                Contact Me
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-14 flex items-center gap-3 text-muted-foreground">
              <div className="w-8 h-0.5 bg-border" />
              <span className="font-body text-xs tracking-widest uppercase">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
