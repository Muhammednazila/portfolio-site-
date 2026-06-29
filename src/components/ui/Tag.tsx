import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type TagProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "default" | "accent" | "success";
};

const toneStyles = {
  default: "border-white/10 bg-white/5 text-muted",
  accent: "border-accent/20 bg-accent/10 text-accent",
  success: "border-success/20 bg-success/10 text-success",
} as const;

/**
 * Tag — small pill for discrete labels.
 *
 * Used for technology tags on project cards, the grouped chips in the Skills
 * section, and status badges (e.g. an "Available" indicator with tone="success").
 * Deliberately a flat chip, NOT a proficiency bar — skill level is shown by
 * grouping and relevance, not by inventing percentages.
 */
export function Tag({ tone = "default", className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  );
}
