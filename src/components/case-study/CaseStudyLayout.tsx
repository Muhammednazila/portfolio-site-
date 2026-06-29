import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Container,
  Section,
  SectionHeading,
  Tag,
  Button,
} from "@/components/ui";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  status: string;
  heroImage?: string;
  children: ReactNode;
};

export function CaseStudyLayout({
  eyebrow,
  title,
  intro,
  status,
  heroImage,
  children,
}: Props) {
  return (
    <main>
      <Section>
        <Container className="max-w-6xl">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-muted transition hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>

          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            intro={intro}
          />

          <div className="mt-6 flex items-center gap-3">
            <Tag tone="success">{status}</Tag>
          </div>

          {heroImage && (
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-soft">
              <img
                src={heroImage}
                alt={title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="mt-20 space-y-24">
            {children}
          </div>

          <div className="mt-24 flex justify-center">
            <Button href="/#projects" variant="secondary">
              Back to Projects
            </Button>
          </div>

        </Container>
      </Section>
    </main>
  );
}