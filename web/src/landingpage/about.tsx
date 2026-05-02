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

export default function About() {
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
    icon: <RxDashboard />,
    desc: "Production dashboards with real-time state, filters, and scalable UI structure.",
  },
  {
    title: "Auth & User Roles",
    icon: <RxLockClosed />,
    desc: "Secure authentication with role-based access and multi-tenant support.",
  },
  {
    title: "Onboarding Flows",
    icon: <RxRocket />,
    desc: "User flows designed to get users to value fast with minimal friction.",
  },
  {
    title: "Landing Pages",
    icon: <RxLayout />,
    desc: "Fast, conversion-focused SaaS landing pages with solid performance and SEO structure.",
  },
];

const backendWork = [
  {
    title: "REST APIs",
    icon: <RxLayers />,
    desc: "Clean Django APIs with proper structure, pagination, and filtering.",
  },
  {
    title: "Payments",
    icon: <PiCreditCard />,
    desc: "Stripe and billing systems for SaaS subscriptions and one-time payments.",
  },
  {
    title: "Integrations",
    icon: <RxMixerHorizontal />,
    desc: "OAuth, email, storage, and third-party APIs wired into production systems.",
  },
  {
    title: "Internal Tools",
    icon: <RxComponentInstance />,
    desc: "Custom admin tools for managing users, data, and operations beyond Django admin.",
  },
];

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 border-b border-border bg-background selection:bg-neutral-900 selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* ─── Intro ─── */}
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Overview
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              I help founders ship SaaS products fast.
            </h2>

            <p className="text-xl text-foreground leading-relaxed max-w-lg">
              I build production-ready SaaS systems with React and Django,
              focused on shipping quickly, clean architecture, and features that
              actually support real users in production.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="pt-2">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
              {tools.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-600 transition-colors hover:border-neutral-400"
                >
                  <Icon className="text-sm" />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ─── Section bridge ─── */}
        <p className="text-2xl text-foreground max-w-2xl mb-12 leading-relaxed">
          Most work falls into two layers: what users interact with, and the
          backend systems that make it work reliably in production.
        </p>

        {/* ─── Service cards ─── */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { label: "SaaS Product Layer", data: productWork },
            { label: "Backend Systems", data: backendWork },
          ].map((section) => (
            <div key={section.label} className="flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-6">
                {section.label}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {section.data.map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col h-full rounded-2xl border border-border bg-card p-5 transition-[border,shadow] duration-300 hover:border-neutral-900 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-50 text-neutral-900 border border-neutral-100 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                        {item.icon}
                      </div>
                      <h4 className="text-[15px] font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
