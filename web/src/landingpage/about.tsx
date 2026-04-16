"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export default function About() {
  const tools = [
    { icon: SiReact, label: "React", color: "text-cyan-500" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-sky-500" },
    { icon: SiDjango, label: "Django", color: "text-green-700" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-indigo-600" },
    { icon: SiDocker, label: "Docker", color: "text-blue-500" },
  ];

  const offers = [
    "Landing pages that convert visitors into leads",
    "Business websites that are fast and easy to manage",
    "Waitlist + MVP setups for early-stage products",
    "Dashboards and internal tools for teams",
    "API integrations and backend systems",
    "Improving performance and fixing existing UIs",
  ];

  return (
    <section id="about" className="border-b border-neutral-200 pl-8 py-28">
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Building clean, usable web apps
          </h2>

          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              I build web applications with a focus on clarity, performance, and
              maintainability. Most of my work is centered around React,
              TypeScript, and Django-based backends.
            </p>

            <p>
              I prefer simple, well-structured solutions over overengineered
              ones. The goal is always the same — ship something reliable that
              users can actually use.
            </p>
          </div>
        </div>

        {/* ─── Offers (Main Focus) ───────────────── */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              What I offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {offers.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-4 py-4 border-b border-neutral-200"
              >
                {/* subtle index marker */}
                <span className="text-sm text-neutral-400 font-mono">→</span>

                <p className="text-neutral-800 leading-relaxed transition-colors group-hover:text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Tools (Low emphasis, clean row) ───────────────── */}
        <div className=" pt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          {tools.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-neutral-500"
            >
              <Icon className={`text-base ${color}`} />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="mt-8">
          <p className="text-sm text-neutral-600">
            Available for freelance work and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
