import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

import contactLinks from "../utils/contacts";

export default function Contact() {
  const handleEmailRedirect = () => {
    window.location.href = `mailto:${contactLinks.Email}?subject=Project Inquiry&body=Hi Shoaib,%0A%0AI'd like to discuss a project with you.`;
  };
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contactLinks.Email,
      meta: "Usually replies within 24 hours",
      onClick: handleEmailRedirect,
      primary: true,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "See my professional background",
      href: contactLinks.LinkedIn,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Browse code and projects",
      href: contactLinks.Github,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-background selection:text-white selection:bg-neutral-800 pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* ─── Header ───────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="section-subheading mb-5">
            Let's build something worth shipping
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Have a product idea or an existing app that needs work? Send a quick
            message with what you're working on and I'll get back with a clear
            next step.
          </p>
        </div>

        {/* ─── Contact methods ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isPrimary = method.primary;

            const cardClasses = isPrimary
              ? "bg-zinc-900 border-zinc-900 text-white"
              : "bg-transparent border-zinc-300 text-foreground hover:border-zinc-900";

            const content = (
              <div
                className={`group h-full flex flex-col justify-between border rounded-lg p-6 transition-colors duration-200 ease-out ${cardClasses}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      size={20}
                      className={
                        isPrimary
                          ? "text-white"
                          : "text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                      }
                    />
                    <ArrowUpRight
                      size={18}
                      className={
                        isPrimary
                          ? "text-white/60"
                          : "text-muted group-hover:text-foreground transition-colors duration-200"
                      }
                    />
                  </div>

                  <p className="text-sm uppercase tracking-wider mb-2 opacity-70">
                    {method.label}
                  </p>
                  <p
                    className={`font-medium break-all ${isPrimary ? "" : "text-foreground"}`}
                  >
                    {method.value}
                  </p>
                </div>

                {method.meta && (
                  <p className="text-sm mt-4 opacity-60">{method.meta}</p>
                )}
              </div>
            );

            return method.onClick ? (
              <button
                key={method.label}
                onClick={method.onClick}
                className="text-left"
              >
                {content}
              </button>
            ) : (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* ─── Footer ───────────────── */}
        <div className="pt-8 pb-4 border-t border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shoaib Codes — All rights reserved</p>
          <p>Built with React & Tailwind</p>
        </div>
      </div>
    </section>
  );
}
