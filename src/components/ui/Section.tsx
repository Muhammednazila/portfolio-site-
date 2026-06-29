import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /**
   * Anchor id (e.g. "about"). Enables smooth-scroll navigation and the
   * scroll-spy active-link highlight the header will use later.
   */
  id?: string;
  /** Render on the raised surface color instead of the page background. */
  surface?: boolean;
};

/**
 * Section — vertical layout primitive.
 *
 * Owns the consistent top/bottom rhythm between page sections and the anchor
 * id. Centralizing the vertical padding here is what makes a content-dense,
 * 11-section page feel calm and even — the "make density feel weightless"
 * goal from the brief — instead of each section choosing its own margins
 * (a classic source of uneven, amateur-looking spacing).
 *
 * `scroll-mt-20` offsets the sticky header so anchor jumps land correctly.
 */
export function Section({
  id,
  surface = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32",
        surface && "bg-surface",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
