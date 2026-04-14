import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ProjectItem from "./projectitems";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    { id: "01", name: "Nexus Dashboard", desc: "Enterprise resource planning for distributed SaaS teams.", stack: "React / Django" },
    { id: "02", name: "Lumina Pay", desc: "Automated billing engine with Stripe Connect integration.", stack: "DRF / Python" },
    { id: "03", name: "Vertex UI", desc: "A headless component library for data-heavy interfaces.", stack: "Tailwind / TS" },
  ];

  return (
    <div className="antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="container-max">
        {/* Hero */}
        <section className="h-screen flex flex-col justify-end pb-24">
          <div className={`reveal-text ${isLoaded ? "reveal-visible" : ""}`}>
            <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] font-semibold tracking-tighter mb-10">
              SaaS <br /> Builder<span className="text-gray-300">.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <p className="md:col-span-5 text-xl text-gray-500 font-light leading-relaxed">
                Engineering scalable backends with Django and fluid frontends with React. 
                Focused on architectural integrity and user-centric design.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400">The Philosophy</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-6xl font-light leading-[1.1] mb-16 italic">
                "Code should be as clean as the interfaces it powers."
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                <div>
                  <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">Scalability</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Building SaaS isn't just about features; it's about multi-tenant 
                    architectures that grow without friction.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">Precision</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Every pixel and API endpoint is intentional. I bridge the gap 
                    between design systems and robust backend logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section-padding">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400">Selected Projects</h2>
            <span className="text-xs font-serif italic text-gray-400">/ 003</span>
          </div>
          <div className="border-t border-black/5">
            {projects.map((p) => <ProjectItem key={p.id} {...p} />)}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-[#FDFCFB] mt-20 pt-32 pb-12">
        <div className="container-max">
          <div className="mb-40">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">Ready to build?</p>
            <a href="mailto:hello@joe.dev" className="text-5xl md:text-8xl font-medium tracking-tighter hover:opacity-50 transition-opacity">
              hello@joe.dev
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-white/10">
            <div className="flex gap-10 text-[10px] uppercase tracking-widest">
              {['LinkedIn', 'GitHub', 'Read.cv'].map(link => (
                <a key={link} href="#" className="hover:text-gray-400 transition-colors">{link}</a>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              © 2026 — Designed for Scale
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;