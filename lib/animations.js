// Centralized Framer Motion variants.
//
// Two groups live here:
//   1. Reusable presets (fadeUp / slideLeft / slideRight / zoomIn) for new work.
//   2. Page-specific variants that preserve the exact existing animations on
//      the ProfileNumbers section and the "Our Founder" page.
//
// The page-specific groups intentionally keep their original transition values
// and animate-key names ("visible" vs "show") so the on-screen motion is
// byte-for-byte identical to before the refactor.

/* ------------------------------------------------------------------ */
/* Reusable presets                                                    */
/* ------------------------------------------------------------------ */

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

/* ------------------------------------------------------------------ */
/* ProfileNumbers section (animate key: "visible")                     */
/* ------------------------------------------------------------------ */

export const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const statsCardReveal = {
  hidden: { opacity: 0, y: 70, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/* "Our Founder" page (animate key: "show")                            */
/* ------------------------------------------------------------------ */

export const founderContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

export const founderHeading = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const founderCard = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

export const founderImage = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const founderContent = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
