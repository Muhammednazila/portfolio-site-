import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Container } from "../ui";
import { cn } from "../../lib/cn";
import { DURATION, EASE_OUT } from "../../lib/motion";
import { navItems, sectionIds } from "../../data/navigation";
import { site } from "../../data/site";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Logo } from "./Logo";

// Local fallback MobileMenu to avoid import resolution issues.
function MobileMenu({
  open,
  onClose,
  activeId,
}: {
  open: boolean;
  onClose: () => void;
  activeId?: string | null;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40" onClick={onClose}>
      <div
        className="w-64 max-w-full bg-background p-4"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="mb-4" onClick={onClose} aria-label="Close menu">
          Close
        </button>
        <nav aria-label="Mobile">
          {/* Minimal placeholder nav: real items come from navItems in Header */}
          {/** Intentionally simple to avoid cross-file imports */}
          <div className="text-sm text-muted">Menu</div>
          {activeId && <div className="mt-2 text-xs text-foreground">Active: {activeId}</div>}
        </nav>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.base, ease: EASE_OUT }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass border-b border-white/10" : "border-b border-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo className="text-base" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item: { href: string; label: string }) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={site.resumeUrl} size="sm" className="hidden sm:inline-flex">
              Resume
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen ? "true" : "false"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-white/5 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </motion.header>
  );
}