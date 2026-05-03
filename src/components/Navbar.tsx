"use client";
import { useState, useEffect } from "react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-[500] transition-all duration-300 ${
          scrolled
            ? "bg-[#080604]/95 backdrop-blur-md border-b border-[#c9a96e]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          
          {/* LOGO */}
          <div
            onClick={() => scrollTo("hero")}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="text-[#c9a96e] text-lg">✦</span>
            <div>
              <p className="font-serif text-[18px] tracking-[0.25em] text-[#f5f0e8] leading-none">
                WE YOU <span className="text-[#c9a96e]">SALON</span>
              </p>
              <p className="text-[8px] tracking-[0.5em] text-[#6b6055] font-sans mt-[2px]">
                ROHRU · HIMACHAL
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "services", "gallery", "visit"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[10px] tracking-[0.3em] uppercase text-[#6b6055] hover:text-[#c9a96e] transition"
              >
                {id}
              </button>
            ))}

            <button
              onClick={onBookClick}
              className="border border-[#c9a96e] text-[#c9a96e] px-6 py-2 text-[10px] tracking-[0.3em] uppercase hover:bg-[#c9a96e] hover:text-[#080604] transition"
            >
              Book Now
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden relative z-[600]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-[1px] w-full bg-[#c9a96e] transition-all ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-[1px] w-full bg-[#c9a96e] transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1px] w-full bg-[#c9a96e] transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (OVERLAY) */}
      <div
        className={`fixed inset-0 bg-[#080604]/98 backdrop-blur-lg z-[400] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["about", "services", "gallery", "visit"].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-[14px] tracking-[0.4em] uppercase text-[#f5f0e8] hover:text-[#c9a96e] transition"
          >
            {id}
          </button>
        ))}

        <button
          onClick={() => {
            onBookClick();
            setMenuOpen(false);
          }}
          className="mt-6 bg-[#c9a96e] text-[#080604] px-10 py-3 text-[11px] tracking-[0.3em] uppercase"
        >
          Book Now
        </button>
      </div>
    </>
  );
}