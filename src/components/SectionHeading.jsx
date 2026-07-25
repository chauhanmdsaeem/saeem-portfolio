import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "../lib/motion";

export default function SectionHeading({ eyebrow, title, accent }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="mb-14 text-center"
    >
      {eyebrow && (
        <p className="mono mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--color-mint)]">
          {eyebrow}
        </p>
      )}
      <h2 className="display text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
        {title} <span className="text-[color:var(--color-mint)]">{accent}</span>
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-mint-dim)]" />
    </motion.div>
  );
}
