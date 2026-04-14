interface ProjectItemProps {
  id: string;
  name: string;
  desc: string;
  stack: string;
}

const ProjectItem = ({ id, name, desc, stack }: ProjectItemProps) => (
  <div className="project-row group cursor-pointer">
    <span className="text-xs text-gray-400 font-light">{id}</span>
    <div>
      <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:italic transition-all">
        {name}
      </h3>
    </div>
    <div className="hidden md:block">
      <p className="text-sm text-gray-500 font-light max-w-xs">{desc}</p>
    </div>
    <div className="text-right">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-black">
        {stack}
      </span>
    </div>
  </div>
);

export default ProjectItem;