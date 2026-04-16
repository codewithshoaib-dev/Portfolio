import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://linkedin.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="border-b border-neutral-200 pl-8 py-28">
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Let’s work together
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Open to freelance projects, collaborations, and building product
            ideas with teams who care about quality and performance.
          </p>
        </div>

        {/* ─── Contact Methods ───────────────── */}
        <div className="space-y-2 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-neutral-200 transition-colors hover:border-black"
              >
                {/* Left side */}
                <div className="flex items-center gap-4">
                  <Icon className="text-neutral-600 group-hover:text-black transition-colors text-lg" />

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {method.label}
                    </p>
                    <p className="text-sm text-neutral-500">{method.value}</p>
                  </div>
                </div>

                {/* Arrow */}
                <span className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            );
          })}
        </div>

        {/* ─── Email CTA (soft emphasis, not a “button hero”) ───────────────── */}
        <div className="border border-neutral-200 rounded-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Direct email
            </p>

            <p className="text-neutral-900 font-medium">hello@yourdomain.com</p>

            <p className="text-sm text-neutral-600 mt-1">
              Typically replies within 24 hours
            </p>
          </div>

          <a
            href="mailto:hello@yourdomain.com"
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded hover:translate-y-[-2px] transition-all w-fit"
          >
            Send email →
          </a>
        </div>

        {/* ─── Footer ───────────────── */}
        <div className="mt-20 pt-10 border-t border-neutral-200 text-center text-sm text-neutral-500 space-y-2">
          <p>Built with React & Tailwind</p>
          <p>© 2024 — All rights reserved</p>
        </div>
      </div>
    </section>
  );
}
