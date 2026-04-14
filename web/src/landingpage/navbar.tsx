const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white">
    <div className="container-max py-8 flex justify-between items-center">
      <span className="text-sm font-semibold tracking-tighter">JOE — 2026</span>
      <div className="flex gap-10">
        {["Approach", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link-premium"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;