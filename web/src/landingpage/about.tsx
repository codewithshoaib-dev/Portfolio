import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiNextdotjs,
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
interface WorkItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const tools = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Nextjs" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiDjango, label: "Django" },
  { icon: SiPostgresql, label: "Postgres" },
];

const frontendWork: WorkItem[] = [
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

const backendWork: WorkItem[] = [
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

export default function About() {
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

            <h2 className="section-subheading mb-5">
              I design, build, and ship production SaaS.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I work across the stack, building everything from React interfaces
              to Django backends and taking products from idea to launch.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border bg-muted/10 px-2.5 py-1.5 text-sm"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-30">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Capabilities
              </span>
            </div>

            <div className="h-px flex-1 bg-border" />

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:block">
              Frontend + Backend
            </span>
          </div>

          <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
            <WorkColumn items={frontendWork} dividerSide="right" />
            <WorkColumn items={backendWork} dividerSide="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkColumn({
  items,
  dividerSide,
}: {
  items: WorkItem[];
  dividerSide: "left" | "right";
}) {
  return (
    <div
      className={`relative ${
        dividerSide === "right" ? "md:pr-10" : "md:pl-10"
      }`}
    >
      <div
        className={`absolute top-0 hidden h-full w-px bg-border md:block ${
          dividerSide === "right" ? "right-0" : "left-0"
        }`}
      />

      <div>
        {items.map((item, index) => (
          <div
            key={item.title}
            className="group animate-work-item -mx-3 flex items-start gap-4 rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-card"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-accent transition-colors group-hover:border-accent/40">
              {item.icon}
            </div>

            <div>
              <h4 className="font-medium text-foreground">{item.title}</h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
