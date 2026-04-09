import { useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "ashok.ponay@gmail.com",
    href: "mailto:ashok.ponay@gmail.com",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: "Phone",
    value: "+91 80724 45507",
    href: "tel:+918072445507",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.91-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.49.36-1.06.62-1.7.78-.64.17-1.31.25-2.02.25H0V4.503h6.938zm-.34 5.65c.585 0 1.063-.13 1.44-.41.373-.27.558-.7.558-1.29 0-.33-.06-.6-.18-.82-.12-.22-.29-.4-.5-.53-.21-.13-.45-.22-.72-.27-.27-.05-.55-.07-.84-.07H3.13v3.39h3.468zm.16 5.86c.32 0 .62-.03.9-.09.28-.06.53-.17.74-.33.21-.15.38-.36.5-.62.12-.27.18-.6.18-.99 0-.79-.22-1.35-.67-1.69-.44-.34-1.02-.51-1.74-.51H3.13v4.23h3.628zm8.332-9.88h5.576v1.44H15.09V6.13zm2.93 10.09c.46.45 1.12.67 1.98.67.62 0 1.15-.15 1.6-.46.45-.31.73-.64.84-.99h2.5c-.4 1.24-1.01 2.13-1.83 2.66-.82.54-1.82.8-2.99.8-.81 0-1.54-.13-2.19-.39-.65-.26-1.2-.63-1.66-1.1-.46-.47-.81-1.04-1.06-1.7-.25-.66-.37-1.38-.37-2.16 0-.76.12-1.47.38-2.13.26-.66.62-1.23 1.09-1.71.47-.48 1.03-.86 1.68-1.13.65-.28 1.37-.42 2.16-.42.88 0 1.65.17 2.31.5.66.33 1.2.78 1.63 1.34.43.56.74 1.2.93 1.92.19.72.26 1.48.21 2.28H15.75c.04.9.3 1.56.76 2.01zm3.44-5.4c-.37-.41-.93-.61-1.67-.61-.49 0-.9.08-1.22.25-.33.17-.6.37-.8.62-.2.24-.34.5-.43.77-.09.27-.14.52-.15.75h4.97c-.1-.83-.34-1.37-.7-1.78z" />
      </svg>
    ),
    label: "Behance",
    value: "behance.net/ashok_arjunan1",
    href: "https://www.behance.net/ashok_arjunan1",
  },
];

export default function Contact() {
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <section id="contact" ref={ref} className="bg-card border-t border-border">
      <div className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Let's Talk
          </p>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="reveal w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="reveal font-body text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Open to new opportunities, collaborations, and creative projects.
            Let's build something remarkable together.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              data-ocid={`contact-${item.label.toLowerCase()}`}
              className="reveal group flex flex-col items-center text-center bg-background border border-border rounded-sm p-6 hover:border-primary/50 hover:shadow-gold-glow transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {item.label}
              </span>
              <span className="font-display font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-200 break-all">
                {item.value}
              </span>
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div className="reveal flex justify-center mb-16">
          <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-6 py-3 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">
              Available for freelance and full-time opportunities
            </span>
          </div>
        </div>

        {/* View Behance CTA */}
        <div className="reveal text-center mb-16">
          <a
            href="https://www.behance.net/ashok_arjunan1"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact-behance-cta"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-primary/90 hover:shadow-gold-glow transition-all duration-300 rounded-sm"
          >
            View Full Portfolio on Behance
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
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg tracking-wider text-foreground">
            SEENU <span className="text-primary">ARJUNAN</span>
          </div>
          <p className="font-body text-muted-foreground text-sm text-center">
            © {year} Seenu Arjunan. All rights reserved.
          </p>
          <p className="font-body text-muted-foreground text-sm">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
