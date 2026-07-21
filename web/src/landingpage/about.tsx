import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

import {
  RxDashboard,
  RxLockClosed,
  RxRocket,
  RxLayout,
  RxLayers,
  RxMixerHorizontal,
  RxComponentInstance,
} from "react-icons/rx";

import { PiCreditCard } from "react-icons/pi";
import { ChevronDown } from "lucide-react";

export default function About() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  const tools = [
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiDjango, label: "Django" },
    { icon: SiPostgresql, label: "Postgres" },
    { icon: SiVercel, label: "Vercel" },
  ];

  const productWork = [
    {
      title: "SaaS Dashboards",
      description:
        "Responsive dashboards with analytics, charts, tables, filters, and role-aware experiences.",
      icon: <RxDashboard />,
    },
    {
      title: "Auth & User Roles",
      description:
        "Secure authentication, protected routes, permissions, and multi-role access control.",
      icon: <RxLockClosed />,
    },
    {
      title: "Onboarding Flows",
      description:
        "Guided onboarding, progress tracking, and user journeys that improve activation.",
      icon: <RxRocket />,
    },
    {
      title: "Landing Pages",
      description:
        "Fast, SEO-friendly pages designed to convert visitors into customers.",
      icon: <RxLayout />,
    },
  ];

  const backendWork = [
    {
      title: "REST APIs",
      description:
        "Clean, scalable Django REST APIs with filtering, pagination, authentication, and documentation.",
      icon: <RxLayers />,
    },
    {
      title: "Payments",
      description:
        "Stripe integration for subscriptions, checkout flows, billing, and webhooks.",
      icon: <PiCreditCard />,
    },
    {
      title: "Integrations",
      description:
        "Third-party APIs including email services, cloud storage, and external platforms.",
      icon: <RxMixerHorizontal />,
    },
    {
      title: "Internal Tools",
      description:
        "Admin dashboards and business tools that automate repetitive workflows.",
      icon: <RxComponentInstance />,
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-border bg-background selection:bg-neutral-900 selection:text-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Overview
            </p>

            <h2 className="max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              I build complete SaaS products that are ready for real users.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From responsive React interfaces to scalable Django APIs, I focus
              on shipping production-ready products quickly without sacrificing
              maintainability.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Built with
            </p>

            <div className="flex flex-wrap gap-3">
              {tools.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  <Icon className="text-base" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-20 h-px bg-border" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <RxDashboard className="text-xl" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Frontend
                </p>

                <h3 className="text-2xl font-semibold">Product experience</h3>
              </div>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
              Interfaces that help users reach value quickly while remaining
              fast, scalable, and easy to extend.
            </p>

            <div className="grid gap-4">
              {productWork.map((item) => {
                const open = expanded === item.title;

                return (
                  <button
                    key={item.title}
                    onClick={() => toggle(item.title)}
                    className="group overflow-hidden rounded-xl border border-border p-4 text-left transition-[border] hover:border-accent/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xl text-accent">{item.icon}</div>

                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                      </div>

                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-300 ${
                        open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <RxLayers className="text-xl" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Backend
                </p>

                <h3 className="text-2xl font-semibold">Production systems</h3>
              </div>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
              APIs and infrastructure built for authentication, payments,
              integrations, and long-term reliability.
            </p>

            <div className="grid gap-4">
              {backendWork.map((item) => {
                const open = expanded === item.title;

                return (
                  <button
                    key={item.title}
                    onClick={() => toggle(item.title)}
                    className="group overflow-hidden rounded-xl border border-border p-4 text-left transition-all hover:border-accent/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xl text-accent">{item.icon}</div>

                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                      </div>

                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-300 ${
                        open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
