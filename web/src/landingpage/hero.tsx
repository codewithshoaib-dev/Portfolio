export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b bg-background selection:bg-neutral-900 selection:text-white border-border px-6 pt-16 lg:pt-6 pb-20 md:pb-24"
    >
      <div className="container-max relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Available for new projects
              </span>
            </div>

            <h1 className="max-w-[28ch] text-[2.75rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
              Hi, I’m Shoaib, I help founders ship SaaS products
              <span className="text-accent font-bold"> fast</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-foreground">
              From idea to production-ready React and Django systems, focused on
              usability, scalability, and getting real users live quickly.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Start a project →
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary"
              >
                View work
              </button>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 flex flex-row flex-wrap lg:flex-col items-center justify-center gap-4 lg:items-end">
            <div className="group flex w-full max-w-70 items-center gap-4 rounded-xl border border-neutral-200 bg-white/50 p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Fast SaaS MVP 
                </p>
                <p className="text-xs text-muted-foreground">
                  Turn ideas into systems
                </p>
              </div>
            </div>

            <div className="group flex w-full max-w-70 translate-x-0 items-center gap-4 rounded-xl border border-neutral-200 bg-white/50 p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md lg:-translate-x-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Auth & roles
                </p>
                <p className="text-xs text-muted-foreground">
                  Secure user access
                </p>
              </div>
            </div>

            <div className="group flex w-full max-w-70 items-center gap-4 rounded-xl border border-neutral-200 bg-white/50 p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Payment & billing
                </p>
                <p className="text-xs text-muted-foreground">
                  Stripe / Lemonsqueezy
                </p>
              </div>
            </div>

            <div className="group flex w-full max-w-70 translate-x-0 items-center gap-4 rounded-xl border border-neutral-200 bg-white/50 p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md lg:-translate-x-12">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  API integration
                </p>
                <p className="text-xs text-muted-foreground">
                  REST & Third-party sync
                </p>
              </div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute -z-10 h-64 w-64 bg-accent/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
