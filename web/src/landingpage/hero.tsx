import {
  HiBolt,
  HiShieldCheck,
  HiCreditCard,
  HiCircleStack,
} from "react-icons/hi2";

const features = [
  {
    title: "Fast SaaS MVP",
    description: "Turn ideas into systems",
    icon: HiBolt,
  },
  {
    title: "Auth & roles",
    description: "Secure user access",
    icon: HiShieldCheck,
  },
  {
    title: "Payment & billing",
    description: "Stripe integration",
    icon: HiCreditCard,
  },
  {
    title: "API integration",
    description: "REST & Third-party sync",
    icon: HiCircleStack,
  },
];

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
              <span className="text-sm font-bold uppercase tracking-wider text-accent">
                Available for new projects
              </span>
            </div>

            <h1 className="max-w-[28ch] text-[2.75rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3rem]">
              Hi, I’m Shoaib, I help founders ship SaaS products
              <span className="text-accent font-bold"> fast</span>
            </h1>

            <p className="mt-8 max-w-xl text-2xl text-foreground">
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

          <div className="relative mt-12 grid w-full max-w-136 grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-col lg:items-end">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                        key={feature.title}
                        className={`
                group relative overflow-hidden rounded-3xl border border-border/75
                bg-card/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                backdrop-blur-xl transition-all duration-300
                hover:-translate-y-1 hover:border-accent/50
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]
                lg:w-full lg:max-w-72
                ${index === 1 ? "lg:-translate-x-6" : ""}
                ${index === 3 ? "lg:-translate-x-10" : ""}
              `}
                >

                  <div className="relative flex items-start gap-4">
                    <div
                      className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl border border-accent/10
              bg-linear-to-br from-accent/12 to-accent/4
              text-accent shadow-sm
            "
                    >
                      <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-foreground">
                        {feature.title}
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
