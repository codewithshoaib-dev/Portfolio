import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

export default function About() {
  const capabilities = [
    {
      title: "Frontend builds",
      points: [
        "React and TypeScript interfaces",
        "Responsive landing pages",
        "Reusable UI components",
      ],
    },
    {
      title: "Backend work",
      points: [
        "Django REST APIs",
        "Auth and business logic",
        "PostgreSQL database design",
      ],
    },
    {
      title: "Product builds",
      points: [
        "MVPs and early SaaS setups",
        "Dashboards and admin tools",
        "Basic onboarding flows",
      ],
    },
    {
      title: "Integrations",
      points: [
        "Third-party APIs",
        "Performance and UI fixes",
        "Codebase improvements",
      ],
    },
  ];

  const tools = [
    { icon: SiReact, label: "React", color: "text-cyan-500" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-sky-500" },
    { icon: SiDjango, label: "Django", color: "text-green-700" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-indigo-600" },
    { icon: SiVercel, label: "Vercel", color: "text-gray-700" },
  ];

  return (
    <section id="about" className=" border-b border-neutral-200 px-6 py-20">
      <div className="container-max">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            About
          </p>

          <h2 className="section-subheading mb-6">
            Simple builds, clean structure
          </h2>

          <div className="space-y-5 text-neutral-600 text-lg leading-relaxed">
            <p>
              I mostly work with React, TypeScript, and Django REST APIs. I
              prefer building complete features rather than isolated parts.
            </p>

            <p>
              The focus is on clarity, performance, and keeping things easy to
              extend later without unnecessary complexity.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-8">
            What I do
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {capabilities.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-neutral-900 font-medium">{group.title}</h3>

                <ul className="space-y-2 text-neutral-600">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-neutral-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
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

        <p className="mt-6 text-sm text-neutral-600">
          Available for freelance work and collaborations.
        </p>
      </div>
    </section>
  );
}
