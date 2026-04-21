import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "See my professional background",
      href: "https://linkedin.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Browse code and projects",
      href: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="border-b border-neutral-200 px-6 pt-24">
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Contact
          </p>

          <h2 className="section-subheading mb-5">
            Let’s build something that works
          </h2>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Need a website or web app for your business? Send a quick message
            with what you’re looking for, and I’ll get back with a clear next step.
          </p>
        </div>

        {/* ─── Primary CTA  ───────────────── */}
        <div className="border border-neutral-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Email
            </p>

            <p className="text-neutral-900 font-medium">hello@yourdomain.com</p>

            <p className="text-sm text-neutral-600 mt-1">
              Usually replies within 24 hours
            </p>
          </div>

          <a href="mailto:shoaib@gosaasuild.com" className="btn-primary">
            Send a message →
          </a>
        </div>

        {/* ─── Secondary Contact Methods ───────────────── */}
        <div className="space-y-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row group"
              >
                <div className="flex items-center gap-4">
                  <Icon className="contact-icon" />

                  <div>
                    <p className="contact-label">{method.label}</p>
                    <p className="contact-value">{method.value}</p>
                  </div>
                </div>

                <span className="contact-arrow">→</span>
              </a>
            );
          })}
        </div>

        {/* ─── Footer ───────────────── */}
        <div className="mt-16 pt-8 border-t pb-4 border-neutral-200 text-center text-sm text-neutral-500 space-y-1">
          <p>Built with React & Tailwind</p>
          <p>© 2026 Shoaib Dev — All rights reserved</p>
        </div>
      </div>
    </section>
  );
}
