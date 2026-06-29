import { ArrowUp } from "lucide-react";
import { Button, Container, Reveal } from "@/components/ui";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between">
            <div className="max-w-sm">
              <Logo className="text-lg" />
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {site.role}. Building thoughtful, performant products.
              </p>
              <Button href={site.resumeUrl} variant="secondary" size="sm" className="mt-5">
                Download Resume
              </Button>
            </div>

            <div className="flex gap-16">
              <nav aria-label="Footer" className="flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">Navigate</p>
                {navItems.map((item) => (
                <a 
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">Connect</p>
                <a href={site.socials.github} className="text-sm text-muted transition-colors hover:text-foreground">GitHub</a>
                <a href={site.socials.linkedin} className="text-sm text-muted transition-colors hover:text-foreground">LinkedIn</a>
                <a href={"mailto:" + site.email} className="text-sm text-muted transition-colors hover:text-foreground">Email</a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-muted">&copy; {year} {site.name}. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}