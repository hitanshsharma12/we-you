"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#0b0907] text-[#f5f0e8] py-20 px-6 border-t border-[#c9a96e]/10">
      <div className="max-w-6xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="font-serif text-3xl tracking-[0.25em] text-[#c9a96e] mb-2">
              WE YOU
            </h2>
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#8a7f72] mb-4">
              Salon · Rohru
            </p>

            <p className="text-sm text-[#bfb6a8] leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium beauty & grooming experience in Rohru. 
              Where elegance meets perfection.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#c9a96e] mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              {["about", "services", "gallery", "visit"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-[#bfb6a8] hover:text-[#c9a96e] transition relative group"
                >
                  {id}
                  <span className="block h-px w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase text-[#c9a96e] mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-sm text-[#bfb6a8]">

              <a href="tel:+917018796714" className="hover:text-[#c9a96e] transition">
                📞 +91 7018796714
              </a>

              <a
                href="https://wa.me/917018796714"
                target="_blank"
                className="hover:text-[#c9a96e] transition"
              >
                💬 WhatsApp Chat
              </a>

              <a
                href="https://maps.google.com/?q=We+You+Salon+Rohru"
                target="_blank"
                className="hover:text-[#c9a96e] transition"
              >
                📍 Rohru, Himachal Pradesh
              </a>
            </div>

            {/* CTA BUTTON */}
            <a
              href="https://wa.me/917018796714"
              target="_blank"
              className="inline-block mt-6 px-6 py-3 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-widest uppercase hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#c9a96e]/10 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#7a7066] gap-4">

          <p>© 2026 We You Salon · All rights reserved</p>

          <p className="tracking-widest uppercase text-[10px]">
            Designed by <span className="text-[#c9a96e]">Hi-Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}