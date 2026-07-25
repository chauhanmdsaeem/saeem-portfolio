import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "loading profile.json",
  "compiling projects[]",
  "linking skills → experience",
  "ready",
];

export default function BootLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const step = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100);
        return next;
      });
    }, 140);
    return () => clearInterval(step);
  }, []);

  useEffect(() => {
    const idx = Math.min(
      LINES.length - 1,
      Math.floor((progress / 100) * LINES.length)
    );
    setLineIndex(idx);
    if (progress >= 100) {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(onDone, 500);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--color-bg)]"
        >
          <div className="relative w-[90%] max-w-sm text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--color-mint-dim)]"
              style={{ boxShadow: "0 0 40px rgba(52,231,154,0.25)" }}
            >
              <span className="mono text-lg text-[color:var(--color-mint)]">SC</span>
            </motion.div>
            <p className="mono text-sm text-[color:var(--color-ink)]">
              saeem<span className="text-[color:var(--color-mint)]">.dev</span>
            </p>
            <p className="mono mt-1 text-xs text-[color:var(--color-muted)]">
              {LINES[lineIndex]}
              <span className="blink">_</span>
            </p>
            <div className="mx-auto mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[color:var(--color-surface-2)]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, var(--color-mint-dim), var(--color-mint))",
                }}
              />
            </div>
            <p className="mono mt-2 text-[11px] text-[color:var(--color-muted)]">
              {Math.floor(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
