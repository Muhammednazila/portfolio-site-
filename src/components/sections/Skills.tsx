import { motion, useReducedMotion } from "motion/react";
import {
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "../ui";
import { EASE_OUT } from "../../lib/motion";
import { skillCategories, type Skill } from "../../data/skills";

function SkillBadge({ skill, reduce }: { skill: Skill; reduce: boolean | null }) {
  return (
    <Card glass={false} interactive className="p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        {skill.level != null && (
          <span className="text-xs tabular-nums text-muted">{skill.level}%</span>
        )}
      </div>

      {skill.level != null && (
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          {reduce ? (
            <div
              className={`h-full rounded-full bg-accent w-[${skill.level}%]`}
            />
          ) : (
            <motion.div
              className={`h-full rounded-full bg-accent w-[${skill.level}%] origin-left`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            />
          )}
        </div>
      )}
    </Card>
  );
}

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Tech Stack"
            title="What I work with"
            intro="A snapshot of the tools, languages, and disciplines I use to take products from first idea to launch."
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <category.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} reduce={reduce} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
