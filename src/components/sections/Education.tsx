import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import {
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            intro="The formal foundation behind how I think about software and design."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.05}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    Class of {item.graduationYear}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {item.location}
                  </span>
                </div>

                {item.honors && (
                  <div className="mt-3">
                    <Tag tone="success" className="gap-1.5">
                      <Award className="size-3.5" />
                      {item.honors}
                    </Tag>
                  </div>
                )}

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                    Relevant coursework
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <Tag key={course}>{course}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
