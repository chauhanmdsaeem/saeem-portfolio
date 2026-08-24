import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportSettings } from "../lib/motion";

function CertificationCard({ title, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-mint-dim)] text-[color:var(--color-mint)]">
          <Award size={18} />
        </div>
        <div>
          <h3 className="display text-sm font-semibold text-[color:var(--color-ink)] leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  if (!profile.certifications || profile.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative px-6 pb-28 pt-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="What I've earned" title="My" accent="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.certifications.map((cert, i) => (
            <CertificationCard
              key={i}
              title={cert}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
