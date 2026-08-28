import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import { hoverLift, hoverLiftSmall } from "../lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(52,231,154,0.16), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mono mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)]/60 px-4 py-2 text-xs uppercase tracking-widest text-[color:var(--color-muted)]"
        >
          <span className="text-[color:var(--color-mint)]">&gt;_</span>
          {profile.eyebrow}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="display text-5xl font-bold leading-[1.05] tracking-tight text-[color:var(--color-ink)] sm:text-6xl md:text-7xl"
        >
          Hi, I'm{" "}
          <span className="text-glow text-[color:var(--color-mint)]">
            {profile.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mono mt-5 text-lg text-[color:var(--color-cyan)] sm:text-xl"
        >
          &gt; {profile.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={hoverLift.whileHover}
            whileTap={hoverLift.whileTap}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-mint)] px-6 py-3 text-sm font-semibold text-[#04120b]"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={hoverLift.whileHover}
            whileTap={hoverLift.whileTap}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mono inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] px-6 py-3 text-sm text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-mint-dim)]"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mono mt-14 flex items-center justify-center gap-5 text-xs uppercase tracking-widest text-[color:var(--color-muted)]"
        >
          <span>Connect //</span>
          <motion.a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            whileHover={hoverLiftSmall.whileHover}
            whileTap={hoverLiftSmall.whileTap}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-mint-dim)] hover:text-[color:var(--color-mint)]"
          >
            <GithubIcon size={16} />
          </motion.a>
          <motion.a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={hoverLiftSmall.whileHover}
            whileTap={hoverLiftSmall.whileTap}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-mint-dim)] hover:text-[color:var(--color-mint)]"
          >
            <LinkedinIcon size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={hoverLiftSmall.whileHover}
            whileTap={hoverLiftSmall.whileTap}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-mint-dim)] hover:text-[color:var(--color-mint)]"
          >
            <Mail size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
