"use client";

import { motion } from "framer-motion";

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="py-24 px-6 bg-[#0b0907] text-[#f5f0e8]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96e] block mb-3">
            Find Us
          </span>

          <h2 className="font-serif text-[clamp(34px,6vw,64px)] font-light">
            Visit <em className="italic text-[#c9a96e]">Us</em>
          </h2>

          <div className="w-16 h-px bg-[#c9a96e]/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: "📍",
                label: "Address",
                value:
                  "Near Shikhru Devta Temple, Upper Market, Rohru, Himachal Pradesh 171207",
              },
              {
                icon: "🕐",
                label: "Hours",
                value:
                  "Mon–Sat: 9:30 AM – 7:30 PM\nSunday: By Appointment",
              },
              {
                icon: "📞",
                label: "Phone & WhatsApp",
                value: "088945 01597 / 7018796714",
              },
              {
                icon: "⭐",
                label: "Rating",
                value:
                  "4.7 stars · 192+ Google Reviews · Premium Experience",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl border border-[#c9a96e]/10 bg-[#14110d]/60 backdrop-blur-md hover:border-[#c9a96e]/40 transition duration-500"
              >
                <span className="text-2xl">{item.icon}</span>

                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] block mb-1">
                    {item.label}
                  </span>

                  <p className="text-sm text-[#d6cfc5] leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* BUTTON */}
            <a
              href="https://maps.google.com/?q=We+You+Salon+Rohru+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border border-[#c9a96e] text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
            >
              📍 Open in Google Maps
            </a>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-[#c9a96e]/10"
          >
            {/* subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12),transparent_70%)] pointer-events-none" />

            <iframe
              src="https://www.google.com/maps?q=31.2014,77.7476&hl=en&z=18&t=k&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition-all duration-500"
              title="We You Salon Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}