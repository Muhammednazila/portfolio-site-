import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  /** Controls the max content width. */
  size?: "narrow" | "default" | "wide";
};

const sizeStyles = {
  narrow: "max-w-3xl", // long-form prose / focused content
  default: "max-w-6xl", // standard section width
  wide: "max-w-7xl", // near-full-bleed layouts
} as const;

/**
 * Container — horizontal layout primitive.
 *
 * Owns ONE thing: the max content width and the responsive side gutters.
 * Every section drops its content inside a Container so horizontal rhythm is
 * identical site-wide and never re-invented per section.
 */
export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
