import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base = cn(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium",
  "transition-all duration-200",
  // Always-visible, on-brand keyboard focus (accessibility floor).
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:pointer-events-none disabled:opacity-50",
);

const variantStyles: Record<Variant, string> = {
  // Solid accent that lifts with a glow on hover — the primary CTA.
  primary: "bg-accent text-white shadow-soft hover:bg-accent-hover hover:shadow-glow",
  // Quiet bordered surface for secondary actions.
  secondary:
    "border border-white/10 bg-surface text-foreground hover:border-white/20 hover:bg-white/5",
  // Text-only for tertiary / inline actions.
  ghost: "text-muted hover:bg-white/5 hover:text-foreground",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

// Discriminated union: pass `href` and you get a real <a> with anchor props;
// omit it and you get a <button> with button props. This keeps "View Projects"
// (a link) and "Download Resume" (could be either) correctly semantic, and the
// type system rejects e.g. `onClick` typed for the wrong element.
type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Button — the primary interactive primitive.
 *
 * One component covers buttons and link-buttons so CTAs look identical
 * regardless of whether they navigate or trigger an action. Icons are passed
 * as children (the `gap-2` handles spacing), e.g.:
 *
 *   <Button href="#projects">View Projects <ArrowRight className="size-4" /></Button>
 *   <Button variant="secondary" onClick={...}>Download Resume</Button>
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
