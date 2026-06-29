import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/** Wordmark that links back to the top of the page. Shared by Header + Footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#home"
      className={cn(
        "font-semibold tracking-tight text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      {site.name}
    </a>
  );
}