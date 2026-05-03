"use client";
import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080604]">
      
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=90"
        alt="Salon"
        fill
        priority
        className="object-cover object-center grayscale brightness-[0.35] scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080604]/95 via-[#080604]/60 to-[#080604]/30 z-[1]" />

      {/* Left Gold Line */}
      <div className="absolute left-[5%] top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#c9a96e] to-transparent opacity-50 z-[2]" />

      {/* Content */}
      <div className="relative z-[3] text-center px-6 max-w-4xl">
        
        {/* Tag */}
        <p className="animate-fade-up text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] mb-6">
          Welcome to Luxury
        </p>

        {/* 🔥 FIXED TITLE (better spacing + alignment) */}
        <h1 className="font-serif text-[clamp(42px,10vw,110px)] leading-[0.9] text-[#f5f0e8]">
          We You
        </h1>

        <h2 className="font-serif italic text-[clamp(40px,9vw,100px)] leading-[1] text-[#c9a96e] mb-6">
          Beauty
        </h2>

        {/* Subtext */}
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#6b6055] leading-6 mb-10">
          Premium Hair & Beauty Services <br className="hidden sm:block"/>
          in the Heart of Rohru
        </p>

        {/* 🔥 SEXY BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Primary */}
          <button
            onClick={onBookClick}
            className="group relative overflow-hidden px-10 py-4 text-[10px] tracking-[0.35em] uppercase font-semibold text-[#080604]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#c9a96e] via-[#e8d5b0] to-[#c9a96e] bg-[length:200%_100%] group-hover:bg-right transition-all duration-500"></span>
            <span className="relative z-10">Book Your Session</span>
          </button>

          {/* Secondary */}
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-10 py-4 text-[10px] tracking-[0.35em] uppercase border border-[#c9a96e]/50 text-[#f5f0e8] hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a96e] to-transparent animate-scroll-line" />
        <span className="text-[8px] tracking-[0.5em] uppercase text-[#6b6055]">
          Scroll
        </span>
      </div>

      {/* Stats (mobile responsive fix 🔥) */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#c9a96e]/10 bg-[#080604]/70 backdrop-blur-md z-[3]">
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center">
          {[
            { num: "4.7★", label: "Google Rating" },
            { num: "192+", label: "Clients" },
            { num: "100%", label: "Satisfaction" },
            { num: "LGBTQ+", label: "Friendly" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-4 ${
                i !== 3 ? "border-r border-[#c9a96e]/10" : ""
              }`}
            >
              <p className="font-serif text-lg text-[#c9a96e]">
                {stat.num}
              </p>
              <p className="text-[8px] tracking-[0.3em] uppercase text-[#6b6055] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}