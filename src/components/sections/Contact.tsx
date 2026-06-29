import { Mail, MapPin } from "lucide-react";
import {
  Card,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            intro="Have a role, a project, or an idea you'd like to talk through? Send a message and I'll get back to you."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Left — contact methods */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed text-muted">
                I'm always open to discussing product design, mobile development,
                or new opportunities. The form is the quickest way to reach me —
                or use any of the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">Email</span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">Availability</span>
                    <span className="block text-sm font-medium text-foreground">
                      Open to remote opportunities
                    </span>
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                  Find me online
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground"
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — the form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
