import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Toast } from "./Toast";
import contactLinks from "../utils/contacts";

export default function Contact() {

  const [isToast, setIsToast] = useState(false)
  
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactLinks.Email);
      setIsToast(true)
    } catch {
      alert(`Copy failed. Email: ${contactLinks.Email}`);
    }
  };

  return (
    <section
      id="contact"
      className="border-b bg-background border-neutral-200 selection:text-white selection:bg-neutral-800 px-6 pt-24"
    >
      <div className="container-max">
        {/* ─── Header ───────────────── */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Contact
          </p>

          <h2 className="section-subheading mb-5">
            Let’s build something that works
          </h2>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Need a website or web app for your business? Send a quick message
            with what you’re looking for, and I’ll get back with a clear next
            step.
          </p>
        </div>

        {/* ─── Primary CTA  ───────────────── */}
        <div className="border border-neutral-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
              Email
            </p>

            <p className="text-neutral-900 font-medium">
              {contactLinks.Email}
            </p>

            <p className="text-sm text-neutral-600 mt-1">
              Usually replies within 24 hours
            </p>
          </div>

          <button onClick={handleCopyEmail} className="btn-primary">
            Copy Email
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
      <Toast message="Email copied to clipboard!" show={isToast} setToast={setIsToast} />
    </section>
  );
}
