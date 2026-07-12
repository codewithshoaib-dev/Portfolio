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
    <nav className=" w-full bg-zinc-950 z-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 relative">
        {/* Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 180 180"
            className="h-7 w-7 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M0 0 C13.80811322 -1.35817507 23.80488926 8.58778757 34.11083984 16.57641602 C35.97144153 17.97847965 37.87746179 19.28546703 39.8046875 20.59375 C42.58060234 22.56303234 44.28896044 24.36933382 45.875 27.4375 C46.26429688 28.15808594 46.65359375 28.87867187 47.0546875 29.62109375 C51.15789562 39.94693568 50.13775604 53.76930324 46.22265625 64.0390625 C41.59542424 74.3262135 34.32641045 79.91785492 24.16796875 84.19140625 C10.73189992 89.0419116 -3.72746563 88.65171368 -16.69140625 82.78125 C-24.82796407 78.70731284 -32.86094896 73.27810208 -37 65 C-33.04 60.38 -29.08 55.76 -25 51 C-21.33439304 52.83280348 -20.49185353 53.35509142 -18.25 56.375 C-14.37652538 61.10596137 -9.69761662 63.10079446 -4 65 C-0.94245072 65.27643387 2.11880412 65.27738906 5.1875 65.3125 C6.01314453 65.34150391 6.83878906 65.37050781 7.68945312 65.40039062 C13.57601296 65.46069423 18.12671912 64.42472986 23 61 C24.97296178 58.52246503 24.97296178 58.52246503 26 56 C26.495 55.01 26.495 55.01 27 54 C27.39213038 51.44508177 27.39213038 51.44508177 27.5 48.5 C27.60828125 47.03046875 27.60828125 47.03046875 27.71875 45.53125 C26.80188581 41.02665636 24.69573544 38.44417562 21.98291016 34.79248047 C17.79753589 28.89832745 14.5833657 22.3706597 11.16210938 16.01367188 C7.90700942 10.07067583 4.64618044 4.94319654 0 0 Z "
              fill="#ffffff"
              transform="translate(84,70)"
            />
            <path
              d="M0 0 C2.76142808 2.23887399 5.41531773 4.55971339 8 7 C7.52891903 11.6855732 5.70898637 13.83126584 2.5 17.1875 C-0.61845094 20.3345872 -0.61845094 20.3345872 -3 24 C-6 23 -6 23 -8.1875 20.75 C-15.30948462 13.78628171 -22.58543817 11.01681683 -32.4375 10.6875 C-38.50381567 10.83873779 -44.14572012 11.51226974 -48.85546875 15.6171875 C-53.28719002 20.52260819 -54.52555853 24.95347748 -54.390625 31.53710938 C-53.94389487 34.35374285 -53.20075422 35.42202849 -51.37890625 37.578125 C-46.7520375 43.42820466 -43.42021467 49.98340733 -39.85546875 56.51171875 C-36.61143428 62.37265931 -33.16047168 67.75367472 -29 73 C-27.99681889 74.33094156 -26.99600563 75.66368022 -26 77 C-27.35524008 76.9108799 -28.709229 76.80272007 -30.0625 76.6875 C-30.81660156 76.62949219 -31.57070312 76.57148437 -32.34765625 76.51171875 C-39.75153176 75.08328327 -45.48942643 70.8613624 -51.5625 66.625 C-52.7990332 65.77808594 -52.7990332 65.77808594 -54.06054688 64.9140625 C-66.32298746 56.44503879 -66.32298746 56.44503879 -69.6875 51.6875 C-70.25017578 50.91986328 -70.25017578 50.91986328 -70.82421875 50.13671875 C-74.47608334 43.50027379 -75.55738596 37.72523853 -75.5 30.25 C-75.49355469 29.37110107 -75.48710938 28.49220215 -75.48046875 27.58666992 C-75.18034182 16.85811957 -71.71580599 8.72091915 -64.23046875 0.96875 C-46.15160689 -14.98877431 -19.00901068 -13.71617919 0 0 Z "
              fill="#ffffff"
              transform="translate(121,35)"
            />
            <path
              d="M0 0 C9.79716981 -0.43867925 9.79716981 -0.43867925 14 3 C16.69923919 7.04885879 16.38439179 10.8445894 16.47851562 15.55078125 C16.62524596 19.48541172 16.62524596 19.48541172 18.3671875 22.92578125 C20.50716281 24.33365974 22.48320899 24.65989311 25 25 C25 28.3 25 31.6 25 35 C24.05125 35.28875 23.1025 35.5775 22.125 35.875 C18.94788422 36.76825109 18.94788422 36.76825109 17 39 C16.79857506 41.24444937 16.68678079 43.4973775 16.625 45.75 C16.30188032 51.4780307 15.94910784 54.8115523 12 59 C9.47524538 60.26237731 7.68799534 60.09856404 4.875 60.0625 C3.96492187 60.05347656 3.05484375 60.04445312 2.1171875 60.03515625 C1.41851562 60.02355469 0.71984375 60.01195312 0 60 C0 57.36 0 54.72 0 52 C3.465 51.505 3.465 51.505 7 51 C7.02578125 50.05898437 7.0515625 49.11796875 7.078125 48.1484375 C7.65532223 35.47633467 7.65532223 35.47633467 12 31 C12.66 31 13.32 31 14 31 C14 30.34 14 29.68 14 29 C13.34 29 12.68 29 12 29 C7.21768301 22.57376154 7.57693318 16.81498429 8 9 C5.36 9 2.72 9 0 9 C0 6.03 0 3.06 0 0 Z "
              fill="#ffffff"
              transform="translate(139,61)"
            />
            <path
              d="M0 0 C0 2.64 0 5.28 0 8 C-2.31 8.33 -4.62 8.66 -7 9 C-7.02578125 9.94101563 -7.0515625 10.88203125 -7.078125 11.8515625 C-7.64147627 24.21968366 -7.64147627 24.21968366 -12 29 C-11.71125 29.5775 -11.4225 30.155 -11.125 30.75 C-10.75375 31.4925 -10.3825 32.235 -10 33 C-9.6596875 33.556875 -9.319375 34.11375 -8.96875 34.6875 C-7.6342572 37.87306347 -7.56601825 40.81167155 -7.375 44.25 C-7.30023437 45.51328125 -7.22546875 46.7765625 -7.1484375 48.078125 C-7.09945313 49.04234375 -7.05046875 50.0065625 -7 51 C-3.535 51.495 -3.535 51.495 0 52 C0 54.64 0 57.28 0 60 C-8.73868778 60.91628959 -8.73868778 60.91628959 -11.7421875 58.734375 C-15.63257927 53.99224065 -16.01909719 51.08978594 -16.0625 45.125 C-16.17770823 40.11570632 -16.17770823 40.11570632 -18.84375 36.1875 C-21.28383914 34.94285756 -21.28383914 34.94285756 -25 34 C-25 31.03 -25 28.06 -25 25 C-23.865625 24.71125 -22.73125 24.4225 -21.5625 24.125 C-20.386875 23.75375 -19.21125 23.3825 -18 23 C-16.2133635 19.42672701 -16.64747573 15.20621618 -16.4765625 11.26171875 C-15.85226215 6.9888434 -14.22283855 4.3639353 -11.375 1.1875 C-7.69666095 -0.65166953 -4.03765305 -0.23294152 0 0 Z "
              fill="#ffffff"
              transform="translate(39,61)"
            />
          </svg>

          <span className="text-sm font-bold tracking-tight text-white uppercase">
            ShoaibCodes
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-1.5 text-[16px] font-medium text-white hover:text-accent hover:bg-card rounded-full transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          <div className="h-4 w-px bg-zinc-600 mx-2" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="ml-3 bg-white text-zinc-950 px-4 py-2 rounded-full text-[12px] font-medium hover:bg-accent transition-colors"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-120 md:hidden flex flex-col gap-1.25 p-2 items-end outline-none group"
          aria-label="Toggle Navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 bg-zinc-500 transition-[transform,width] duration-200 ease-out ${
              isOpen ? "w-6 translate-y-1.75 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`h-0.5 bg-zinc-500 transition-[width,opacity] duration-200 ${
              isOpen ? "w-0 opacity-0" : "w-4"
            }`}
          />
          <span
            className={`h-0.5 bg-zinc-500 transition-[transform,width] duration-200 ${
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
                    className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
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
