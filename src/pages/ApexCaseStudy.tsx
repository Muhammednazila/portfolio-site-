import {ApexScreen } from "@/components/case-study/ApexScreen";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { Tag } from "@/components/ui";
import { apex } from "@/data/caseStudies";

export function ApexCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow={apex.category}
      title={apex.title}
      intro={apex.overview}
      status={apex.status}
      heroImage="/apex-logistics-logo.png"
    >
      {/* Project Overview */}
      <section className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Project Overview
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="text-lg leading-9 text-muted">
              {apex.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Problem
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted">
          {apex.problem}
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Solution
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted">
          {apex.solution}
        </p>
      </section>

      {/* Project Information */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Project Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <p className="text-sm text-muted">
              Role
            </p>

            <h3 className="mt-2 font-semibold">
              Product Designer
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <p className="text-sm text-muted">
              Platform
            </p>

            <h3 className="mt-2 font-semibold">
              Mobile Application
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <p className="text-sm text-muted">
              Tools
            </p>

            <h3 className="mt-2 font-semibold">
              Figma
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <p className="text-sm text-muted">
              Status
            </p>

            <h3 className="mt-2 font-semibold">
              {apex.status}
            </h3>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          My Role
        </h2>

        <div className="flex flex-wrap gap-3">
          {apex.role.map((role) => (
            <Tag key={role}>{role}</Tag>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-4">
          {apex.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="font-semibold">
              Live Shipment Tracking
            </h3>

            <p className="mt-2 text-muted">
              Monitor deliveries in real time with continuous shipment updates.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="font-semibold">
              Driver Assignment
            </h3>

            <p className="mt-2 text-muted">
              Assign drivers quickly while balancing delivery workload.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="font-semibold">
              Delivery Status
            </h3>

            <p className="mt-2 text-muted">
              Track shipments from pickup to successful delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="font-semibold">
              Exception Alerts
            </h3>

            <p className="mt-2 text-muted">
              Identify delayed or cancelled deliveries immediately.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* Gallery */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Screenshots
        </h2>

        <ApexScreen />
      </section>

      {/* Design Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Design Process
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {apex.process.map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-accent/40"
            >
              <p className="font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Challenges
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted">
          {apex.challenges}
        </p>
      </section>

      {/* Outcome */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Outcome
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted">
          {apex.outcome}
        </p>
      </section>

      {/* Highlights */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Project Highlights
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-surface p-8">
            <p className="text-5xl font-bold text-accent">
              10+
            </p>

            <p className="mt-3 text-muted">
              Mobile screens designed
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-8">
            <p className="text-5xl font-bold text-accent">
              4
            </p>

            <p className="mt-3 text-muted">
              Core logistics modules
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-8">
            <p className="text-5xl font-bold text-accent">
              UX
            </p>

            <p className="mt-3 text-muted">
              End-to-end product design
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Lessons Learned
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-muted">
          {apex.lessons}
        </p>
      </section>
    </CaseStudyLayout>
  );
}