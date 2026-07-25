import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportSettings, hoverLiftSmall } from "../lib/motion";

function TimelineCard({ icon: Icon, title, org, period, location, points, detail, index }) {
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
            <Icon size={18} />
          </div>
          <div>
            <h3 className="display text-lg font-semibold text-[color:var(--color-ink)]">
              {title}
            </h3>
            <p className="mono text-xs text-[color:var(--color-mint)]">{org}</p>
          </div>
        </div>
        <div className="mono text-right text-[11px] text-[color:var(--color-muted)]">
          <p>{period}</p>
          {location && <p>{location}</p>}
        </div>
      </div>

      {points && (
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
          {points.map((pt, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 text-[color:var(--color-mint)]">›</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
      {detail && <p className="mt-3 text-sm text-[color:var(--color-muted)]">{detail}</p>}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where I've been" title="My" accent="Experience" />

        <div className="space-y-5">
          {profile.experience.map((exp, i) => (
            <TimelineCard
              key={exp.role}
              icon={Briefcase}
              title={exp.role}
              org={exp.org}
              period={exp.period}
              location={exp.location}
              points={exp.points}
              index={i}
            />
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            {...hoverLiftSmall}
            className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-colors duration-200 hover:border-[color:var(--color-mint-dim)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-mint-dim)] text-[color:var(--color-mint)]">
                <Award size={18} />
              </div>
              <h3 className="display text-lg font-semibold text-[color:var(--color-ink)]">
                Achievements & Leadership
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[color:var(--color-muted)]">
              {profile.achievements.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 text-[color:var(--color-mint)]">›</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
