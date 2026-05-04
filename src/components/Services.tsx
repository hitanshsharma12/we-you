"use client";

const services = [
  {
    icon: "✂️",
    name: "Hair Styling",
    desc: "Precision cuts, blowouts & styling tailored to your face shape and personality.",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
  },
  {
    icon: "💆",
    name: "Facial & Skin",
    desc: "Rejuvenating facials and skin treatments for a glowing, radiant complexion.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  },
  {
    icon: "💅",
    name: "Nail Art",
    desc: "From classic manicures to creative nail art — your hands deserve the spotlight.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
  },
  {
    icon: "🌿",
    name: "Waxing & Threading",
    desc: "Gentle, precise hair removal for silky smooth results every time.",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
  },
  {
    icon: "👰",
    name: "Bridal Makeup",
    desc: "Flawless bridal looks crafted to make your most special day unforgettable.",
    img: "https://images.unsplash.com/photo-1519699766478-7a9b2d33f9b6?w=400&q=80",
  },
  {
    icon: "🎨",
    name: "Hair Color",
    desc: "Vivid balayage, highlights & full-color transformations with premium products.",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#080604] text-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] font-sans block mb-3">
            What We Offer
          </span>

          <h2 className="font-serif text-[clamp(36px,6vw,64px)] font-light">
            Our <em className="italic text-[#c9a96e]">Signature</em> Services
          </h2>

          <div className="w-16 h-px bg-[#c9a96e]/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-2xl overflow-hidden border border-[#c9a96e]/10 bg-[#0f0d09] hover:border-[#c9a96e]/40 transition-all duration-500 shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080604]/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-2xl mb-3 block">{s.icon}</span>

                <h3 className="font-serif text-xl text-[#f5f0e8] mb-2">
                  {s.name}
                </h3>

                <p className="text-[12px] text-[#6b6055] leading-relaxed font-sans">
                  {s.desc}
                </p>

                {/* Gold line */}
                <div className="w-10 h-px bg-[#c9a96e]/50 mt-4 group-hover:w-16 transition-all duration-300" />
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.15),transparent_70%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}