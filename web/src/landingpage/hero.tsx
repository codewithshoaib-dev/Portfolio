export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-neutral-200 pt-16 md:pt-20 pb-20 md:pb-24"
    >
      {/* ─── Grid Background ───────────────── */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white" />

      {/* ─── Content ───────────────── */}
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ─── Left Content ───────────────── */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-sm tracking-[0.12em] uppercase text-neutral-500 mb-6">
              React • Django • API Integrations
            </p>

            {/* Headline */}
            <h1 className="font-semibold tracking-[-0.015em] leading-[1.15] max-w-[28ch] text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              Hi, I'm Shoaib,{" "}
              <span className="text-neutral-900">
                I build high-quality websites for small businesses
              </span>
            </h1>

            <p className="mt-8 text-lg text-neutral-600 max-w-xl">
              From landing pages to full web apps, I create fast, reliable
              solutions that help you attract customers and run your business
              more efficiently.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn-primary"
              >
                Start a project →
              </button>

              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn-secondary"
              >
                View work
              </button>
            </div>
          </div>

          {/* ─── Right Side (Preview Card) ───────────────── */}
          <div className="relative hidden lg:block">
            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              {/* Top bar */}
              <div className="p-3 border-b border-neutral-200">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-neutral-300 rounded-full" />
                  <span className="w-2 h-2 bg-neutral-300 rounded-full" />
                  <span className="w-2 h-2 bg-neutral-300 rounded-full" />
                </div>
              </div>

              {/* Fake UI content */}
              <div className="p-5">
                <div className="preview-line w-2/3" />
                <div className="preview-line w-1/2" />

                <div className="preview-card">
                  <div className="preview-line w-3/4" />
                  <div className="preview-line w-1/2" />
                </div>

                <div className="preview-card">
                  <div className="preview-line w-2/3" />
                  <div className="preview-line w-1/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
