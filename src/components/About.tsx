"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-28 px-6 bg-[#0f0d09] text-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] block mb-3">
            Who We Are
          </span>

          <h2 className="font-serif text-[clamp(36px,6vw,64px)] font-light leading-tight">
            Where Beauty Meets{" "}
            <em className="italic text-[#c9a96e]">Artistry</em>
          </h2>

          <div className="w-16 h-px bg-[#c9a96e]/40 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div className="space-y-6 animate-fade-up">
            <p className="font-serif text-xl italic text-[#c9a96e]">
              “Every person deserves to feel extraordinary.”
            </p>

            <p className="text-sm leading-loose text-[#6b6055]">
              Nestled in the heart of Rohru, our salon blends artistry with
              precision. From flawless bridal transformations to everyday
              elegance, we craft experiences that go beyond beauty — we create
              confidence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 border border-[#c9a96e]/10 divide-x divide-[#c9a96e]/10 rounded-xl overflow-hidden">
              {[
                { num: "4.7★", label: "Rating" },
                { num: "192+", label: "Clients" },
                { num: "100%", label: "Satisfied" },
              ].map((s) => (
                <div key={s.label} className="py-6 text-center bg-[#080604]">
                  <p className="font-serif text-2xl text-[#c9a96e]">
                    {s.num}
                  </p>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#6b6055] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=85"
                alt="Salon"
                fill
                className="object-cover scale-105 hover:scale-110 transition duration-700"
              />
            </div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-xl mt-8">
              <Image
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=85"
                alt="Beauty"
                fill
                className="object-cover scale-105 hover:scale-110 transition duration-700"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}