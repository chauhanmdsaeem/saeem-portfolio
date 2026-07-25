import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportSettings } from "../lib/motion";

function EducationCard({ degree, org, period, detail, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-mint-dim)] text-[color:var(--color-mint)]">
            <GraduationCap size={18} />
          </div>
          <div>
            <h3 className="display text-lg font-semibold text-[color:var(--color-ink)]">
              {degree}
            </h3>
            <p className="mono text-xs text-[color:var(--color-mint)]">{org}</p>
          </div>
        </div>
        <div className="mono text-right text-[11px] text-[color:var(--color-muted)]">
          <p>{period}</p>
        </div>
      </div>

      {detail && <p className="mt-3 text-sm text-[color:var(--color-muted)]">{detail}</p>}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where I studied" title="My" accent="Education" />

        <div className="space-y-5">
          {profile.education.map((ed, i) => (
            <EducationCard
              key={ed.degree}
              degree={ed.degree}
              org={ed.org}
              period={ed.period}
              detail={ed.detail}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
