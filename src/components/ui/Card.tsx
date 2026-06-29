import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Adds hover elevation + accent glow. Use for cards that act as links
   * (project teasers, certifications) — not for static content panels.
   */
  interactive?: boolean;
  /**
   * Glass (translucent + blur) surface. Set false for a solid surface where
   * blur isn't wanted or would cost too much (e.g. long lists on mobile).
   */
  glass?: boolean;
};

/**
 * Card — the signature premium surface.
 *
 * This is the most-reused visual element in the system: project cards,
 * certification cards, skill groups, and timeline entries are all built on it.
 * It encodes the brief's "glassmorphism, soft shadows, rounded corners" in one
 * place, so the whole site's surface language stays consistent and is tuned by
 * editing a single component.
 *
 * The border is applied here (not inside the `glass` utility) so it remains
 * controllable per-instance via the className override.
 */
export function Card({
  interactive = false,
  glass = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 p-6",
        glass ? "glass" : "bg-surface",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}
