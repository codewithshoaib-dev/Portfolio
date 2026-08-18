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
      className="hero relative overflow-hidden bg-zinc-950 px-6 pt-16 pb-28 text-white selection:bg-white selection:text-zinc-900 lg:pt-6"
    >
      <div className="container-max relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-accent/5 px-3 py-1 backdrop-blur">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
              </span>

              <span className="text-sm font-bold uppercase tracking-wider text-accent">
                Available for new projects
              </span>
            </div>

            <h1
              dir="auto"
              className="max-w-[28ch] text-[clamp(2rem,7vw,3rem)] font-semibold leading-[1.1] tracking-tight"
            >
              Hi, I'm Shoaib. I build{" "}
              <span className="font-bold text-accent">fast,</span>{" "}
              <span className="hero-emphasis">scalable</span> web applications
            </h1>

            <p className="mt-8 max-w-xl text-[clamp(1.125rem,4vw,1.5rem)] text-zinc-300">
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
                className="px-8 py-4 bg-accent text-zinc-950 rounded-md font-medium
           transition-transform duration-200  will-change-transform
           hover:scale-105 shadow-lg"
              >
                Start a project →
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" px-8 py-4 border shadow-sm border-zinc-700 rounded-md font-medium bg-zinc-900 transition-[border,transform] will-change-transform  hover:border-zinc-800 hover:scale-105"
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
                    group relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:bg-white/8
                    lg:w-full lg:max-w-72
                    ${index === 1 ? "lg:-translate-x-6" : ""}
                    ${index === 3 ? "lg:-translate-x-10" : ""}
                  `}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-2xl
                        border border-accent/20
                        bg-accent/10
                        text-accent
                      "
                    >
                      <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-white">
                        {feature.title}
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
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
