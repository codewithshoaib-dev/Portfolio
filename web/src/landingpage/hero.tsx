export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-neutral-200 pt-16 md:pt-20 pb-20 md:pb-24"
    >
      {/* ─── Grid Background ───────────────── */}
      <div className="hero-grid" />

      {/* Bottom fade */}
      <div className="hero-fade" />

      {/* ─── Content ───────────────── */}
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ─── Left Content ───────────────── */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="hero-eyebrow">React • Django • API Integrations</p>

            {/* Headline */}
            <h1 className="hero-heading">
              Hi, I'm Shoaib,{" "}
              <span className="hero-heading-accent">
                I build high-quality websites for small businesses
              </span>
            </h1>

            <p className="hero-subheading">
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
            <div className="hero-preview">
              {/* Top bar */}
              <div className="hero-preview-header">
                <div className="hero-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* Fake UI content */}
              <div className="hero-preview-body">
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
