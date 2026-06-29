import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeId: string;
};

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const slide = reduce ? 0 : -16;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.fast }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-background/80 backdrop-blur-xl"
          />

          <motion.nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-0 flex h-full flex-col bg-surface/95 px-6 pb-10 pt-5"
            initial={{ y: slide, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: slide, opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE_OUT }}
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">{site.name}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-white/5"
              >
                <X className="size-5" />
              </button>
            </div>

            <ul className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-2xl font-semibold transition-colors",
                        isActive ? "text-accent" : "text-foreground hover:text-accent",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              <Button href={site.resumeUrl} className="w-full">
                Download Resume
              </Button>
              <div className="flex items-center gap-5 text-sm text-muted">
                <a href={site.socials.github} className="transition-colors hover:text-foreground">GitHub</a>
                <a href={site.socials.linkedin} className="transition-colors hover:text-foreground">LinkedIn</a>
                <a href={"mailto:" + site.email} className="transition-colors hover:text-foreground">Email</a>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}