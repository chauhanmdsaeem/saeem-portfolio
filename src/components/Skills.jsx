import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  LayoutDashboard,
  Database,
  TerminalSquare,
} from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeUpCard, viewportSettings, hoverLift } from "../lib/motion";

const ICONS = {
  Code2,
  BrainCircuit,
  LayoutDashboard,
  Database,
  TerminalSquare,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I work with" title="Skills &" accent="Tech Stack" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.category}
                custom={i}
                variants={fadeUpCard}
                initial="hidden"
                whileInView="show"
                viewport={viewportSettings}
                whileHover={hoverLift.whileHover}
                whileTap={hoverLift.whileTap}
                className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-colors duration-200 hover:border-[color:var(--color-mint-dim)] hover:shadow-[0_0_30px_-12px_rgba(52,231,154,0.3)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-2)] text-[color:var(--color-mint)] transition-colors group-hover:border-[color:var(--color-mint-dim)]">
                  <Icon size={20} />
                </div>
                <h3 className="display text-lg font-semibold text-[color:var(--color-ink)]">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="mono rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60 px-3 py-1 text-[11px] text-[color:var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
