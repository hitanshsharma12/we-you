import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-linen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] uppercase text-rose font-sans block mb-3">
            Who We Are
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,60px)] font-light text-espresso leading-tight">
            Where Beauty Meets{" "}
            <em className="italic text-rose">Artistry</em>
          </h2>
          <div className="w-14 h-px bg-taupe mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p className="font-serif text-xl font-light leading-relaxed text-mocha mb-6 italic">
              "At We You Salon, every person deserves to feel extraordinary."
            </p>
            <p className="text-sm leading-loose text-mocha/80 font-sans font-light mb-8">
              Nestled in the heart of Rohru near the serene Shikru Devta Mandir, our
              salon is a sanctuary of beauty and warmth. Our skilled team listens to
              your needs and crafts a look that is uniquely yours — whether it's a
              precision cut, a glowing facial, or a breathtaking bridal look.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-sand border border-sand">
              {[
                { num: "4.7★", label: "Rating" },
                { num: "192+", label: "Reviews" },
                { num: "100%", label: "Satisfied" },
              ].map((s) => (
                <div key={s.label} className="py-6 text-center bg-cream">
                  <span className="font-serif text-3xl font-light text-espresso block">
                    {s.num}
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-taupe font-sans mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="grid grid-cols-2 gap-3">
          <Image
  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=85"
  alt="Salon interior"
  width={250}
  height={333}
  className="w-full aspect-[3/4] object-cover mt-8"
/>
<Image
  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=85"
  alt="Beauty service"
  width={250}
  height={333}
  className="w-full aspect-[3/4] object-cover mb-8"
/>
          </div>
        </div>
      </div>
    </section>
  );
}