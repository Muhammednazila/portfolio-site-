import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Button,
  Container,
  Reveal,
  Section,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/cn";
import { projects, type Project } from "@/data/projects";

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="group relative">
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-3xl bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/25 via-surface to-background">
            <span className="text-5xl font-bold text-foreground/80">
              {project.title.charAt(0)}
            </span>
            <span className="text-sm font-medium text-muted">{project.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {project.category}
      </p>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {project.title}
      </h3>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
            Problem
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
            Solution
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.demo && (
          <Button
            href={project.links.demo}
            size="sm"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="size-4" />
            Live Demo
          </Button>
        )}
        {project.links.github && (
          <Button
            href={project.links.github}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="size-4" />
            GitHub
          </Button>
        )}
        <Button href={project.links.caseStudy} variant="ghost" size="sm">
          Case Study
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" surface>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work"
            intro="A few projects that show how I approach problems — from first principles through to a shipped product."
          />
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <div
                key={project.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}>
                  <ProjectImage project={project} />
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={cn(imageLeft ? "lg:order-2" : "lg:order-1")}
                >
                  <ProjectContent project={project} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
