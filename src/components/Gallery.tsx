const images = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85", cls: "row-span-2", alt: "Salon" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85", cls: "", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85", cls: "", alt: "Makeup" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=85", cls: "", alt: "Facial" },
  { src: "https://images.unsplash.com/photo-1519699766478-7a9b2d33f9b6?w=600&q=85", cls: "col-span-2", alt: "Bridal" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-linen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] uppercase text-rose font-sans block mb-3">
            Our Work
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,60px)] font-light text-espresso">
            A Glimpse of <em className="italic text-rose">Our Craft</em>
          </h2>
          <div className="w-14 h-px bg-taupe mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`overflow-hidden group ${img.cls}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 hover:brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}