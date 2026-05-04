"use client";
import { motion } from "framer-motion";

// ✅ yeh missing tha
const reviews = [
  {
    name: "Meha Rajat",
    text: "A special thank you to Sandeep Kaur — extremely professional, patient, and attentive to every detail. Made sure I was comfortable the entire time.",
    rating: 5,
    tag: "Verified",
  },
  {
    name: "Shilpi Siwach",
    text: "Haircut and waxing done very professionally. Salon is clean and well maintained. Highly recommended.",
    rating: 5,
    tag: "Verified",
  },
];

export default function Reviews() {
  return (
    <section className="py-28 px-6 bg-[#080604] text-[#f5f0e8]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] block mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,64px)] font-light">
            What They <em className="italic text-[#c9a96e]">Say</em>
          </h2>
          <div className="w-16 h-px bg-[#c9a96e]/40 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative p-7 rounded-2xl border border-[#c9a96e]/10 bg-[#0f0d09]/80 backdrop-blur-md hover:border-[#c9a96e]/40 transition duration-500 group"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.15),transparent_70%)]" />

              <div className="flex justify-between mb-4 relative z-10">
                <span className="text-[#c9a96e]">
                  {"★".repeat(r.rating)}
                </span>
                <span className="text-[9px] border border-[#c9a96e]/40 px-2 py-1 uppercase tracking-widest">
                  {r.tag}
                </span>
              </div>

              <p className="font-serif italic text-lg leading-relaxed mb-5 relative z-10">
                "{r.text}"
              </p>

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#6b6055] relative z-10">
                — {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}