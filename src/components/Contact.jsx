import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { fadeLeft, fadeRight, viewportSettings, hoverLift } from "../lib/motion";

const FIELDS = [
  { icon: Mail, label: "Email Address", value: profile.email, href: null },
  { icon: Phone, label: "Phone Contact", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn Profile", value: "Connect on LinkedIn", href: profile.socials.linkedin },
  { icon: GithubIcon, label: "GitHub Codebase", value: "@chauhanmdsaeem", href: profile.socials.github },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("access_key", "50de475d-3c0d-4ec2-9262-5ab24ed0caff");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject || "Portfolio inquiry");
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Let's talk" title="Get In" accent="Touch" />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <h3 className="display text-xl font-semibold text-[color:var(--color-ink)]">
              Let's Connect
            </h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              Whether you have a job opportunity, project inquiry, or just want to
              say hi — feel free to reach out anytime.
            </p>

            <div className="mt-6 space-y-3">
              {FIELDS.map((f) => {
                const Icon = f.icon;
                const content = (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center gap-3 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-4 py-3 transition-colors duration-200 hover:border-[color:var(--color-mint-dim)]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-mint-dim)] text-[color:var(--color-mint)]">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="mono text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                        {f.label}
                      </p>
                      <p className="text-sm text-[color:var(--color-ink)] break-all sm:break-words">{f.value}</p>
                    </div>
                  </motion.div>
                );
                return f.href ? (
                  <a key={f.label} href={f.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={f.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            className="space-y-4 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mono mb-1.5 block text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                  Your Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-sm text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-mint-dim)]"
                />
              </div>
              <div>
                <label className="mono mb-1.5 block text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                  Your Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-sm text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-mint-dim)]"
                />
              </div>
            </div>

            <div>
              <label className="mono mb-1.5 block text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                Subject *
              </label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Opportunity / Collaboration"
                className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-sm text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-mint-dim)]"
              />
            </div>

            <div>
              <label className="mono mb-1.5 block text-[10px] uppercase tracking-widest text-[color:var(--color-muted)]">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-sm text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-mint-dim)]"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={hoverLift.whileHover}
              whileTap={hoverLift.whileTap}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mono flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-mint)] py-3 text-sm font-semibold uppercase tracking-widest text-[#04120b] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={15} /> 
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed to Send" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
