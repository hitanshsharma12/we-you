"use client";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85", cls: "md:row-span-2", alt: "Salon" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85", cls: "", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85", cls: "", alt: "Makeup" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85", cls: "", alt: "Facial" },
  { src: "https://images.unsplash.com/photo-1519699766478-7a9b2d33f9b6?w=800&q=85", cls: "md:col-span-2", alt: "Bridal" },
];

export default function Gallery() {
  return (
    <section className="py-28 px-6 bg-[#080604] text-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] block mb-3">
            Our Work
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,64px)] font-light">
            A Glimpse of <em className="italic text-[#c9a96e]">Our Craft</em>
          </h2>
          <div className="w-16 h-px bg-[#c9a96e]/40 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-xl group ${img.cls}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover transition duration-700 scale-105 group-hover:scale-110 brightness-90 group-hover:brightness-100"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}