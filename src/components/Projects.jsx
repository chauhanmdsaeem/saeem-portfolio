import { motion } from "framer-motion";
import { CodeXml, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeUpCard, fadeUp, viewportSettings, hoverLift, hoverLiftSmall } from "../lib/motion";

const STATUS_STYLES = {
  Completed: "text-[color:var(--color-mint)] border-[color:var(--color-mint-dim)]",
  Live: "text-[color:var(--color-cyan)] border-[color:var(--color-cyan)]/40",
  "In Progress": "text-amber-400 border-amber-400/40",
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Featured" accent="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={fadeUpCard}
              initial="hidden"
              whileInView="show"
              viewport={viewportSettings}
              whileHover={hoverLift.whileHover}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-colors duration-200 hover:border-[color:var(--color-mint-dim)] hover:shadow-[0_0_30px_-10px_rgba(52,231,154,0.25)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-line)] text-[color:var(--color-mint)]">
                  <CodeXml size={18} />
                </div>
                <span
                  className={`mono rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest ${STATUS_STYLES[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="display mt-5 text-xl font-semibold text-[color:var(--color-ink)]">
                {project.name}
              </h3>
              <p className="mono mt-1 text-xs text-[color:var(--color-muted)]">{project.year}</p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-full bg-[color:var(--color-surface-2)] px-2.5 py-1 text-[10px] text-[color:var(--color-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={hoverLiftSmall.whileHover}
                  whileTap={hoverLiftSmall.whileTap}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mono flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--color-line)] py-2.5 text-xs text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-mint-dim)]"
                >
                  <GithubIcon size={14} /> Source Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={hoverLiftSmall.whileHover}
                  whileTap={hoverLiftSmall.whileTap}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mono flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--color-mint)] py-2.5 text-xs font-medium text-[#04120b]"
                >
                  <ExternalLink size={14} /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          className="mt-10 text-center"
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="mono inline-flex items-center gap-2 text-sm text-[color:var(--color-mint)] hover:underline"
          >
            <GithubIcon size={16} /> More projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
