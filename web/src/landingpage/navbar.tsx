import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactModal from "./contactmodal";
import contactLinks from "../utils/contacts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { label: "Overview", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Replace with real URLs
  const socials = [
    {
      label: "GitHub",
      href: contactLinks.Github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: contactLinks.LinkedIn,
      icon: FaLinkedin,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full bg-background border-b border-border z-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 relative">
        {/* Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rotate-45" />
          </div>
          <span className="text-sm font-bold tracking-tight text-gray-900 uppercase">
            ShoaibCodes
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          <div className="h-4 w-px bg-gray-200 mx-2" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="ml-3 bg-black text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-120 md:hidden flex flex-col gap-1.25 p-2 items-end outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 bg-foreground transition-[transform,width] duration-200 ease-out ${
              isOpen ? "w-6 translate-y-1.75 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`h-0.5 bg-foreground transition-[width,opacity] duration-200 ${
              isOpen ? "w-0 opacity-0" : "w-4"
            }`}
          />
          <span
            className={`h-0.5 bg-foreground transition-[transform,width] duration-200 ${
              isOpen ? "w-6 -translate-y-1.75 -rotate-45" : "w-5"
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 w-full h-screen bg-card z-110 md:hidden transition-transform duration-300 ease-premium ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 sm:px-12 gap-10">
            {/* Header */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold">
                Menu
              </span>
              <div className="h-px w-8 bg-gray-200" />
            </div>

            {/* Nav */}
            <div className="flex flex-col gap-6">
              {navLinks.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                  }}
                  className={`group flex items-center gap-4 text-5xl font-light tracking-tighter text-foreground transition-all duration-500 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground">
                    0{index + 1}
                  </span>
                  <span className="hover:pl-4 transition-[padding] duration-300">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Socials */}
            <div
              className={`mt-6 transition-opacity duration-700 delay-400 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-px w-full bg-gray-100 mb-4" />

              <div className="flex gap-6">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="uppercase tracking-wide text-xs">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </nav>
  );
}
