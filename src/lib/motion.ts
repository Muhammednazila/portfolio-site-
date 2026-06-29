import type { Variants } from "motion/react";

/**
 * Centralized motion language.
 *
 * The brief asks for "fade in on scroll" and to "avoid excessive motion."
 * Keeping a small, shared vocabulary here (rather than ad-hoc animations per
 * component) is how that restraint is enforced architecturally: every reveal
 * across the site uses the same easing and timing, so the motion feels like
 * one intentional system instead of a collection of effects.
 */

/** Signature easing — a soft, premium ease-out (cubic-bezier). */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Shared durations (seconds) so timing stays consistent everywhere. */
export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

/** The signature reveal: fade in while rising a few pixels. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/** Plain fade — for elements where vertical movement would distract. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/**
 * Stagger container — orchestrates a group of children that each use
 * `fadeUp` / `fadeIn`. Apply to a parent with initial="hidden" and
 * whileInView="visible"; children inherit the staggered timing.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Page transition — for routed pages later, via AnimatePresence. */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: EASE_OUT } },
};
