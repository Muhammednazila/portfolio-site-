import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { Tag } from "@/components/ui";
import { mexchange } from "@/data/caseStudies";

export function MexchangeCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow={mexchange.category}
      title={mexchange.title}
      intro={mexchange.overview}
      status={mexchange.status}
      heroImage="/mexchange/mexchange-logo-white.png"
    >
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Problem</h2>
        <p className="max-w-3xl text-lg leading-8 text-muted">{mexchange.problem}</p>
      </section>

      
      <section className="space-y-6">
  <h2 className="text-3xl font-bold tracking-tight">
    Project Information
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

   

<section className="space-y-8">
  <h2 className="text-4xl font-bold tracking-tight">
    Project Overview
  </h2>

  <p className="w-full text-lg leading-[2.1] text-muted">
    Mexchange is a fintech mobile application designed to simplify
    cryptocurrency exchange, digital wallet management, peer to peer
    transfers, airtime purchases, and bill payments within a single secure
    ecosystem. The goal was to create an experience that combines traditional
    financial services with digital assets in one intuitive application,
    allowing users to exchange currencies, manage wallets, and perform
    everyday transactions confidently from a single platform.
  </p>
</section>

  

  </div>
</section>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">My Role</h2>

        <div className="flex flex-wrap gap-3">
          {mexchange.role.map((role) => (
            <Tag key={role}>{role}</Tag>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Technology Stack</h2>

        <div className="mt-6 flex flex-wrap gap-4">
          {mexchange.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </section>

      <section className="space-y-6">

<h2 className="text-3xl font-bold tracking-tight">
Key Features
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-surface p-6">
<h3 className="font-semibold">
Currency Exchange
</h3>

<p className="mt-2 text-muted">
Exchange currencies with transparent real-time rates.
</p>

</div>

<div className="rounded-2xl border border-white/10 bg-surface p-6">

<h3 className="font-semibold">
Wallet Management
</h3>

<p className="mt-2 text-muted">
Securely manage multiple currency wallets.
</p>

</div>

<div className="rounded-2xl border border-white/10 bg-surface p-6">

<h3 className="font-semibold">
Peer to Peer Transfer
</h3>

<p className="mt-2 text-muted">
Transfer funds instantly between verified users.
</p>

</div>

<div className="rounded-2xl border border-white/10 bg-surface p-6">

<h3 className="font-semibold">
KYC Verification
</h3>

<p className="mt-2 text-muted">
Identity verification for secure onboarding.
</p>

</div>

</div>

</section>
      
      <hr className="border-white/10" />
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Screenshots</h2>
        <Gallery />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Design Process</h2>

       <div className="grid gap-5 md:grid-cols-2">
  {mexchange.process.map((step) => (
    <div
      key={step}
      className="rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-accent/40"
    >
      <p className="font-medium">{step}</p>
    </div>
  ))}
</div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Challenges</h2>
        <p className="max-w-3xl text-lg leading-8 text-muted">{mexchange.challenges}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Outcome</h2>
        <p className="max-w-3xl text-lg leading-8 text-muted">{mexchange.outcome}</p>
      </section>

      <section className="space-y-6">
  <h2 className="text-3xl font-bold tracking-tight">
    Project Highlights
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-surface p-8">
      <p className="text-5xl font-bold text-accent">20+</p>
      <p className="mt-3 text-muted">
        Mobile screens designed
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-surface p-8">
      <p className="text-5xl font-bold text-accent">6+</p>
      <p className="mt-3 text-muted">
        Core product modules
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-surface p-8">
      <p className="text-5xl font-bold text-accent">
        Production
      </p>

      <p className="mt-3 text-muted">
        Current project status
      </p>
    </div>

  </div>
</section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Lessons Learned</h2>
        <p className="max-w-3xl text-lg leading-8 text-muted">{mexchange.lessons}</p>
      </section>
    </CaseStudyLayout>
  );
}