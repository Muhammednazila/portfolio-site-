import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import {
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { about, type Stat } from "@/data/about";

/** Counts up from 0 to `value` when scrolled into view (respects reduced motion). */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{display}</span>;
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-bold text-foreground sm:text-4xl">
        <CountUp value={stat.value} />
        {stat.suffix}
      </div>
      <p className="mt-1 text-sm text-muted">{stat.label}</p>
    </Card>
  );
}

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </Reveal>

        {/* Professional summary + statistics */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="space-y-4">
              {about.summary.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Core strengths */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Core strengths
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.strengths.map((strength, index) => (
              <Reveal key={strength.title} delay={index * 0.05}>
                <Card interactive className="h-full">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <strength.icon className="size-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-foreground">
                    {strength.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {strength.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Career journey */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Career journey
            </h3>
          </Reveal>
          <div className="mt-8 max-w-2xl">
            <div className="relative ml-1.5 border-l border-white/10">
              {about.journey.map((milestone, index) => (
                <Reveal key={milestone.title} delay={index * 0.05}>
                  <div className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 size-3.5 rounded-full bg-accent ring-4 ring-background" />
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">
                      {milestone.period}
                    </p>
                    <h4 className="mt-1 text-base font-semibold text-foreground">
                      {milestone.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Technology highlights */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Technologies I work with
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {about.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
