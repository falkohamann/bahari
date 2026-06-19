/**
 * Shared motion configuration for Framer Motion animations.
 * Single source of truth for easing curves, section/item variants, and directional slides.
 */

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
      staggerChildren: 0.04,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
};

export const leftSlideVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export const rightSlideVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};