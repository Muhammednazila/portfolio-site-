import { BadgeCheck, Calendar, ExternalLink } from "lucide-react";
import {
  Button,
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "../ui";
import { certifications } from "../../data/certifications";
import type { Certification } from "../../data/certifications";

export function Certifications() {
  return (
    <Section id="certifications" surface>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials & continuous learning"
            intro="Certifications that back up my skills across design and development."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert: Certification, index: number) => (
            <Reveal key={cert.title} delay={index * 0.05}>
              <Card interactive className="flex h-full flex-col">
                <div className="mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-accent/15 via-surface to-background">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <BadgeCheck className="size-10 text-accent/70" />
                  )}
                </div>

                <h3 className="text-base font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-sm text-accent">{cert.organization}</p>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <Calendar className="size-3.5" />
                  Issued {cert.issueDate}
                </div>

                {cert.credentialId && (
                  <p className="mt-2 text-xs text-muted/70">
                    Credential ID:{" "}
                    <span className="font-mono text-muted">
                      {cert.credentialId}
                    </span>
                  </p>
                )}

                {cert.verifyUrl && (
                  <div className="mt-auto pt-4">
                    <Button
                      href={cert.verifyUrl}
                      variant="ghost"
                      size="sm"
                      target="_blank"
                      rel="noreferrer"
                      className="px-0"
                    >
                      Verify Credential
                      <ExternalLink className="size-4" />
                    </Button>
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
