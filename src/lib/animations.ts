/* ── Shared animation variants ───────────────────────────── */

// Variant A: Default (core pages)
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// Variant B: Wider stagger, slight lateral slide (location/industry pages)
export const staggerB = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export const fadeUpB = {
  hidden: { opacity: 0, y: 16, x: -8 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variant C: Quick pop-in (comparison pages)
export const staggerC = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUpC = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// Fade in without vertical movement
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};
