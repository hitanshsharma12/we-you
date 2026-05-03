"use client";

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-espresso text-cream py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Logo / Title */}
        <p className="font-serif text-3xl font-light tracking-[0.2em] text-blush mb-1">
          We You Salon
        </p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-taupe font-sans mb-10">
          Beauty · Rohru · Himachal Pradesh
        </p>

        {/* Navigation */}
        <div className="flex justify-center gap-8 flex-wrap mb-10">
          {["about", "services", "gallery", "visit"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[11px] tracking-[0.3em] uppercase text-taupe hover:text-blush transition-colors font-sans"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          
          <a
            href="tel:+917018796714"
            className="text-[11px] tracking-[0.2em] text-taupe hover:text-blush transition-colors font-sans"
          >
            📞 7018796714
          </a>

          <a
            href="https://wa.me/917018796714"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] text-taupe hover:text-blush transition-colors font-sans"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://maps.google.com/?q=We+You+Salon+Rohru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] text-taupe hover:text-blush transition-colors font-sans"
          >
            📍 Get Directions
          </a>

        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-mocha mx-auto mb-6" />

        {/* Copyright */}
        <p className="text-[11px] text-taupe/50 font-sans">
          © 2026 We You Salon · All rights reserved
        </p>

      </div>
    </footer>
  );
}