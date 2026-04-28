import { FaLinkedin, FaGithub } from "react-icons/fa";

import contactLinks from "../utils/contacts";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {


  
  const contactMethods = [
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

   const handleEmailRedirect = () => {
     window.location.href = `mailto:${contactLinks.Email}?subject=Project Inquiry&body=Hi Shoaib,%0A%0AI'd like to discuss a project with you.`;
   };

  return (
    <section
      id="contact"
      className="border-b bg-background border-neutral-200 selection:text-white selection:bg-neutral-800 px-6 pt-16 md:pt-24"
    >
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Contact
          </p>

          <h2 className="section-subheading mb-5">
            Let's build something worth shipping
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Have a product idea or an existing app that needs work? Send a quick
            message with what you're working on and I'll get back with a clear
            next step.
          </p>
        </div>

        {/* ─── Primary CTA  ───────────────── */}
        <div className="border border-neutral-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Email
            </p>

            <p className="text-neutral-900 font-medium">{contactLinks.Email}</p>

            <p className="text-sm text-neutral-600 mt-1">
              Usually replies within 24 hours
            </p>
          </div>

          <button onClick={handleEmailRedirect} className="btn-primary">
            Send an email
          </button>
        </div>

        {/* ─── Secondary Contact Methods ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 border-b border-neutral-200
             transition-colors duration-200 ease-out
            hover:border-neutral-900 group"
              >
                <div className="flex items-center gap-4">
                  <Icon className="text-neutral-500 transition-colors duration-200 ease-out group-hover:text-neutral-900" />

                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {method.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </div>

                <span className="text-neutral-400 transition-transform duration-200 ease-out group-hover:text-neutral-800">
                  <ArrowUpRight size={20} />
                </span>
              </a>
            );
          })}
        </div>

        {/* ─── Footer ───────────────── */}
        <div className="mt-16 pt-8 border-t pb-4 border-neutral-200 text-center text-sm text-neutral-600 space-y-1">
          <p>Built with React & Tailwind</p>
          <p>© 2026 Shoaib Codes — All rights reserved</p>
        </div>
      </div>
    </section>
  );
}
