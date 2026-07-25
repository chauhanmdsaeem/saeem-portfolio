import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { fadeUp, viewportSettings, hoverLiftSmall } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          whileHover={hoverLiftSmall.whileHover}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-2xl border border-[color:var(--color-mint-dim)] bg-[color:var(--color-surface)] px-6 py-12 text-center"
          style={{ boxShadow: "0 0 60px -20px rgba(52,231,154,0.25)" }}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--color-mint-dim)] text-[color:var(--color-mint)]">
            <Sparkles size={20} />
          </div>
          <h3 className="display text-2xl font-bold text-[color:var(--color-ink)] sm:text-3xl">
            Thank You For <span className="text-[color:var(--color-mint)]">Visiting!</span>
          </h3>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            I really appreciate your time exploring my portfolio. Let's build something together.
          </p>
        </motion.div>

        <div className="mono mt-8 flex flex-col items-center justify-between gap-3 text-[11px] text-[color:var(--color-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
