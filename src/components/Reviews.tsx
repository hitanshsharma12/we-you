const reviews = [
  {
    name: "Meha Rajat",
    text: "A special thank you to Sandeep Kaur — extremely professional, patient, and attentive to every detail. Made sure I was comfortable the entire time.",
    rating: 5,
    tag: "Verified",
  },
  {
    name: "Shilpi Siwach",
    text: "Haircut and waxing done very professionally. Salon is clean and well-maintained. The staff is friendly and polite.",
    rating: 5,
    tag: "Verified",
  },
  {
    name: "Maltu Manju",
    text: "We You Salon is officially my go-to spot. Clean, stylish, and they truly care about their clients. A huge thanks to Ashu Di!",
    rating: 5,
    tag: "Verified",
  },
  {
    name: "Google Review",
    text: "I like the way she knows what will work for each person and calmly explains stuff. The stylist listened and delivered a fantastic haircut.",
    rating: 5,
    tag: "4.7★ · 192 Reviews",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] uppercase text-rose font-sans block mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,60px)] font-light text-espresso">
            Words From <em className="italic text-rose">Our Guests</em>
          </h2>
          <div className="w-14 h-px bg-taupe mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-linen border border-sand p-7 hover:border-taupe transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-rose text-sm tracking-widest">
                  {"★".repeat(r.rating)}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-taupe border border-taupe/40 px-2 py-1 font-sans">
                  {r.tag}
                </span>
              </div>
              <p className="font-serif text-lg font-light italic text-espresso leading-relaxed mb-5">
                "{r.text}"
              </p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-taupe font-sans">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}