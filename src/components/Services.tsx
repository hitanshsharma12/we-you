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
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] uppercase text-rose font-sans block mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,60px)] font-light text-espresso">
            Our <em className="italic text-rose">Signature</em> Services
          </h2>
          <div className="w-14 h-px bg-taupe mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-linen overflow-hidden border border-sand hover:border-taupe transition-all duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xl mb-3 block">{s.icon}</span>
                <h3 className="font-serif text-xl font-light text-espresso mb-2">
                  {s.name}
                </h3>
                <p className="text-[12px] text-mocha/70 leading-relaxed font-sans font-light">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}