import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button, Container } from "../ui";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { DURATION, EASE_OUT } from "../../lib/motion";
import { hero } from "../../data/hero";
import { site } from "../../data/site";

/** Derive up-to-two-letter initials from a name for the photo placeholder. */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Hero() {
  const reduce = useReducedMotion();

  // Reduced-motion-aware variants: when reduced, "hidden" already equals the
  // final state and the stagger collapses to zero.
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.base, ease: EASE_OUT },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-24"
    >
      {/* Decorative background glow — purely visual. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Availability badge (wraps gracefully for longer statements) */}
            <motion.div variants={item}>
              <div className="inline-flex max-w-md items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span>{hero.availability}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-balance text-gradient text-xl font-medium sm:text-2xl"
            >
              {hero.headline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            >
              {hero.summary}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" size="lg">
                View Projects
                <ArrowRight className="size-4" />
              </Button>
              <Button href={site.resumeUrl} variant="secondary" size="lg">
                <Download className="size-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <a
                href={site.socials.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.socials.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={"mailto:" + site.email}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                <Mail className="size-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: DURATION.slow,
              ease: EASE_OUT,
              delay: reduce ? 0 : 0.2,
            }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 glass">
              {hero.photo ? (
                <img
                  src={hero.photo}
                  alt={site.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-6xl font-semibold tracking-tight text-muted">
                    {getInitials(site.name)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-6" />
      </motion.a>
    </section>
  );
}
