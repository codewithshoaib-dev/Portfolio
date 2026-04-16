"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStripe,
  SiPostgresql,
  SiSocket,
  SiDjango,
} from "react-icons/si";

export default function Projects() {
  const featured = {
    id: "01",
    title: "E-Commerce Platform",
    description: "Online store with payments, inventory, and order tracking.",
    tech: [SiReact, SiStripe, SiPostgresql],
  };

  const projects = [
    {
      id: "02",
      title: "Collaborative Dashboard",
      description:
        "Real-time workspace for teams with tasks and shared updates.",
      tech: [SiNextdotjs, SiTypescript, SiSocket],
    },
    {
      id: "03",
      title: "Analytics System",
      description: "Custom dashboards with real-time data and reporting tools.",
      tech: [SiReact, SiDjango, SiPostgresql],
    },
  ];

  return (
    <section id="projects" className="border-b border-neutral-200 py-28">
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Selected work
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            A few recent builds focused on performance, usability, and clean
            system design.
          </p>
        </div>

        {/* ─── Featured Project ───────────────── */}
        <div className="border border-neutral-200 rounded-lg p-8 md:p-10 mb-10 hover:border-black transition-colors">
          {/* Placeholder image area */}
          <div className="h-48 bg-neutral-100 border border-neutral-200 rounded mb-8" />

          <div className="max-w-2xl">
            <p className="text-xs text-neutral-400 font-mono mb-3">
              {featured.id}
            </p>

            <h3 className="text-3xl font-semibold tracking-tight mb-4">
              {featured.title}
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-6">
              {featured.description}
            </p>

            {/* Tech icons (kept close, compact) */}
            <div className="flex items-center gap-4 text-neutral-500">
              {featured.tech.map((Icon, i) => (
                <Icon key={i} className="text-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* ─── Secondary Projects ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-neutral-200 rounded-lg p-7 hover:border-black transition-colors"
            >
              {/* Placeholder image area */}
              <div className="h-32 bg-neutral-100 border border-neutral-200 rounded mb-6" />

              <p className="text-xs text-neutral-400 font-mono mb-3">
                {project.id}
              </p>

              <h3 className="text-xl font-semibold tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Compact tech icons */}
              <div className="flex items-center gap-3 text-neutral-500">
                {project.tech.map((Icon, i) => (
                  <Icon key={i} className="text-base" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
