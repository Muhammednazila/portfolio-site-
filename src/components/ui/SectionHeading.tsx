import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Small uppercase label above the title (e.g. "About", "Selected Work"). */
  eyebrow?: string;
  /** The heading text. Rendered as an <h2>. */
  title: string;
  /** Optional supporting sentence below the title. */
  intro?: string;
  align?: "left" | "center";
  /** Apply the gradient text treatment to the title. */
  gradient?: boolean;
  className?: string;
};

/**
 * SectionHeading — the standard heading block for every section.
 *
 * Guarantees a consistent type hierarchy (eyebrow -> title -> intro) so all
 * section headers share one rhythm and weight. The eyebrow uses the accent
 * color and wide tracking; the title can optionally use the gradient
 * treatment for hero-adjacent emphasis. Always an <h2> for correct document
 * outline (the Hero owns the single <h1>).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  gradient = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          // Mutually exclusive to avoid two `color` declarations colliding.
          gradient ? "text-gradient" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {intro && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
