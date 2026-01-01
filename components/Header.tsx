import svgPaths from "../imports/svg-0eodk97dhm";

export function Header() {
  const navItems = ['About', 'Services', 'Client', 'Blog', 'Contact'];

  return (
    <header className="w-full px-6 md:px-20 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#303948] hover:text-[#FCA311] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative w-[75px] h-[58px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 58">
        <g>
          <rect fill="#FCA311" height="50" width="50" y="8" />
          <path d={svgPaths.p3e8c2100} fill="#14213D" />
        </g>
      </svg>
    </div>
  );
}
