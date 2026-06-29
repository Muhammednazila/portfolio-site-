import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { cn } from "@/lib/cn";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            intro="A track record across product design, front-end development, and the systems that support them."
          />
        </Reveal>

        <div className="mt-12 max-w-3xl">
          <div className="relative ml-1.5 border-l border-white/10">
            {experience.map((item, index) => (
              <Reveal
                key={item.company + item.duration}
                delay={index * 0.05}
                className="pb-10 last:pb-0"
              >
                <div className="relative pl-8 sm:pl-10">
                  {/* timeline dot — current role pulses */}
                  <span className="absolute -left-[7px] top-6 flex size-3.5">
                    {item.current && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    )}
                    <span
                      className={cn(
                        "relative inline-flex size-3.5 rounded-full ring-4 ring-background",
                        item.current ? "bg-accent" : "bg-muted",
                      )}
                    />
                  </span>

                  <Card className={cn(item.current && "border-accent/40 shadow-glow")}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      {item.current && <Tag tone="accent">Current</Tag>}
                    </div>

                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {item.company}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
