


import deployly_hero from "../assets/images-optimized/deployly_hero.webp";
import subscripto_form from "../assets/images-optimized/Subscripto_form.webp";
import console_dash from "../assets/images-optimized/console_dash.webp";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Console",
    description:
      "A secure workspace for teams to manage csv files, contacts, users, and other operations in one place.",
    link: "https://console-project.shoaibcodes.com/",
    image: console_dash,
  },
  {
    id: 2,
    title: "Deployly",
    description:
      "A high-converting landing page designed to clearly present the product and turn visitors into customers.",
    link: "https://deployly-project.shoaibcodes.com/",
    image: deployly_hero,
  },
  {
    id: 3,
    title: "Subscripto",
    description:
      "A complete subscription system with signup, pricing, and payments—built to handle customers smoothly.",
    link: "https://subscripto-project.shoaibcodes.com/",
    image: subscripto_form,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b bg-background selection:bg-neutral-900 selection:text-white border-border py-16 md:py-24 px-6 "
    >
      <div className="container-max">
        {/*  Headings  */}
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Selected Work
        </h2>

        <p className="section-subheading mb-16">
          A few things I've built. From SaaS interfaces to full-stack apps with
          auth, payments, and real backend logic.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`
                border border-neutral-200 rounded-xl bg-card overflow-hidden
            transition-normal
            hover:border-neutral-300
              `}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden border-b border-neutral-200 aspect-16/10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain
           transition-transform duration-300 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900">
                  {proj.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {proj.description}
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proj.link}
                  className=" mt-3 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group"
                >
                  View project{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;