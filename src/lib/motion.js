// ────────────────────────────────────────────────────────────
// Shared Framer Motion variants + defaults.
// Import these instead of redefining animation props in every
// component, so scroll-reveal motion stays consistent site-wide.
// ────────────────────────────────────────────────────────────

export const EASE = "easeOut";

// Re-plays every time a section re-enters the viewport (scrolling
// down AND back up), instead of firing once and staying static.
export const viewportSettings = { once: false, amount: 0.3 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
  }),
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

export const fadeUpCard = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE, delay: i * 0.08 },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

// Hover presets — spread these onto motion.* elements.
export const hoverLift = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: EASE },
};

export const hoverLiftSmall = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: EASE },
};
