import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeLeft, fadeRight, viewportSettings, hoverLiftSmall } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get to know me" title="About" accent="Me" />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
          >
            <img
              src="/avatar.jpg"
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg)]/80 px-4 py-3 text-center">
              <p className="mono text-xs text-[color:var(--color-muted)]">{profile.location}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
          >
            <h3 className="display text-xl font-semibold text-[color:var(--color-ink)]">
              {profile.fullName}
            </h3>
            <p className="mono mt-1 text-sm text-[color:var(--color-mint)]">{profile.title}</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[color:var(--color-muted)] sm:text-base">
              {profile.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {profile.about.stats.map((s) => (
                <motion.div
                  key={s.label}
                  {...hoverLiftSmall}
                  className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-center transition-colors hover:border-[color:var(--color-mint-dim)]"
                >
                  <p className="display text-2xl font-bold text-[color:var(--color-mint)]">
                    {s.value}
                  </p>
                  <p className="mono mt-1 text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
