


// import deployly_hero from "./../../assets/images-optimized/deployly_hero.webp";
// import subscripto_pricing from "./../../assets/images-optimized/subscripto_pricing.webp";
// import admin_dash from "./../../assets/images-optimized/admin_dash.webp"

const projects = [
  {
    id: 1,
    title: "Console",
    description:
      "A secure workspace for teams to manage csv files, contacts, users, and other operations in one place.",
    link: "/projects/console",
  },
  {
    id: 2,
    title: "Deployly LP",
    description:
      "A high-converting landing page designed to clearly present the product and turn visitors into customers.",
    link: "/projects/deployly",
  },
  {
    id: 3,
    title: "Subscripto",
    description:
      "A complete subscription system with signup, pricing, and payments—built to handle customers smoothly.",
    link: "/projects/subscripto",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-200 py-24 px-6 ">
      <div className="container-max">
        {/*  Headings  */}
        <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
          Selected Work
        </h2>

        <p className="section-subheading mb-16">
          Real projects built to attract customers, simplify workflows, and
          support business growth.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`
                project-card group
                
              `}
            >
              {/* Image */}
              <div className="project-media">
                <img alt={proj.title} className="project-image" />
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>

                <p className="project-description">{proj.description}</p>

                <a href={proj.link} className="project-link">
                  View project →
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