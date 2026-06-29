import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { DURATION, EASE_OUT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts, in seconds — for manual sequencing. */
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
  /** Animate only the first time it enters the viewport (default true). */
  once?: boolean;
};

/**
 * Reveal — the scroll-triggered fade-up wrapper.
 *
 * Wrap any block in <Reveal> and it fades in as it scrolls into view, using
 * the shared easing/timing from lib/motion. Because every section animates
 * through this ONE component, the site's motion reads as a single deliberate
 * language — directly serving the brief's "fade in on scroll" + "avoid
 * excessive motion."
 *
 * Accessibility: if the user prefers reduced motion, it renders statically
 * with no transform and no fade — the content is never hidden behind an
 * animation that won't play.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ duration: DURATION.base, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
