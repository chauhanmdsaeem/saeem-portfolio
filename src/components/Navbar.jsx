import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="h-9 w-9 rounded-full border border-[color:var(--color-mint-dim)] object-cover"
            loading="lazy"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="display text-sm font-semibold tracking-wide text-[color:var(--color-ink)]">
              {profile.name.toUpperCase()}
            </span>
            <span className="mono text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
              {profile.eyebrow}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`mono text-xs uppercase tracking-widest transition-colors ${
                active === l.id
                  ? "text-[color:var(--color-mint)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="mono hidden items-center gap-2 rounded-full border border-[color:var(--color-mint-dim)] px-3 py-1.5 text-[10px] uppercase tracking-widest text-[color:var(--color-mint)] sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-mint)]" />
            Open to work
          </span>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mono hidden rounded-full bg-[color:var(--color-mint)] px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-[#04120b] sm:inline-block"
          >
            Hire Me
          </motion.a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-[color:var(--color-ink)] md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="mono text-sm uppercase tracking-widest text-[color:var(--color-muted)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
