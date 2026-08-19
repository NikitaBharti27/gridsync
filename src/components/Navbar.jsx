import { useState } from "react";
import { IoGrid } from "react-icons/io5";

function Navbar() {
  const [activeNav, setActiveNav] = useState("features");

  const links = [
    { id: "features", label: "Features", href: "#features" },
    { id: "demo", label: "Showcase", href: "#demo" },
    { id: "pricing", label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur border-b border-slate-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-xl font-bold text-slate-900 hover:opacity-90 transition"
        >
          <IoGrid className="text-indigo-600 text-2xl" />
          <span className="font-extrabold tracking-tight">GridSync</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveNav(link.id)}
              className={`pb-0.5 font-medium transition-colors duration-150 ${
                activeNav === link.id
                  ? "font-semibold text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          onClick={() => setActiveNav("demo")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-indigo-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
