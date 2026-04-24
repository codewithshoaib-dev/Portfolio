import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

export default function About() {
  const tools = [
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiDjango, label: "Django" },
    { icon: SiPostgresql, label: "Postgres" },
    { icon: SiVercel, label: "Vercel" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-background selection:bg-neutral-900 selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Overview
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              I help small businesses improve their websites.
            </h2>
            <p className="text-xl text-foreground leading-relaxed max-w-lg">
              Most sites are slow, unclear, or outdated. I design and build
              modern, high-performance pages that are easier to use and more
              effective.
            </p>
          </div>
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

        <p className="text-2xl text-neutral-700 max-w-2xl mb-12 leading-relaxed">
          The work typically falls into two areas: customer-facing design and
          functional systems that support real business operations.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Group 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Customer-Facing
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Landing Pages",
                  desc: "Focused pages built to turn visitors into leads.",
                },
                {
                  title: "Business Websites",
                  desc: "Modern, clear sites that represent your business properly.",
                },
                {
                  title: "Website Redesigns",
                  desc: "Improve outdated or underperforming sites.",
                },
                {
                  title: "Mobile Optimization",
                  desc: "Ensure your site works smoothly on all devices.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-neutral-300 rounded-lg hover:border-neutral-900 transition-colors"
                >
                  <h4 className="text-base font-medium text-neutral-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Functionality
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Booking Systems",
                  desc: "Let customers schedule and interact",
                },
                {
                  title: "Payment Integration",
                  desc: "Accept payments securely with stripe integration.",
                },
                {
                  title: "Admin Dashboards",
                  desc: "Manage content, users, or data",
                },
                {
                  title: "Custom Features",
                  desc: "Built around your specific business needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-neutral-300 rounded-lg hover:border-neutral-900 transition-colors"
                >
                  <h4 className="text-base font-medium text-neutral-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
