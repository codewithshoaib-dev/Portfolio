

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-neutral-200 pl-8 pt-20 md:pt-26 pb-20 md:pb-24"
    >
      {/* ─── Subtle Grid ───────────────── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />

      {/* ─── Content ───────────────── */}
      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-6">
            Full-Stack Engineer • React • Django
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            SaaS apps that convert
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
            I help startups and small teams build fast, usable interfaces
            without unnecessary complexity.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-4 bg-black text-white font-medium rounded transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 w-fit"
            >
              Get in touch →
            </button>

            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-4 border border-neutral-400 text-black font-medium rounded transition-[border,transform] duration-200 hover:border-black w-fit"
            >
              View work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
