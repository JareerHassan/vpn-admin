import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white border-y border-white/30 bg-[#242f37]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo (left) */}
        <div className="text-2xl font-bold">Leroux</div>

        {/* Nav Links (center on desktop only) */}
        <nav
          className="hidden md:flex gap-30 text-md font-medium absolute left-1/2 -translate-x-1/2"
          style={{ gap: "7.5rem" }}
        >
          <a>Home</a>
          <a>Page</a>
          <a>Portfolio</a>
          <a>Blogs</a>
        </nav>

        {/* Get in touch Button (right on desktop) */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full hover:bg-white/30 transition">
            Get in touch <ArrowRight size={18} />
          </button>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center p-2 rounded-md hover:bg-white/20 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-4 text-md font-medium">
            <a>Home</a>
            <a>Page</a>
            <a>Portfolio</a>
            <a>Blogs</a>
          </nav>

          <div className="mt-4 flex justify-start">
            <button className="flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full hover:bg-white/30 transition">
              Get in touch <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
