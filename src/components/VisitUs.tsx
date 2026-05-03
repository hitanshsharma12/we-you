"use client";

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 px-6 bg-linen">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] uppercase text-rose font-sans block mb-3">
            Find Us
          </span>
          <h2 className="font-serif text-[clamp(36px,6vw,60px)] font-light text-espresso">
            Visit <em className="italic text-rose">Us</em>
          </h2>
          <div className="w-14 h-px bg-taupe mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Info */}
          <div className="space-y-6">
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
                  "4.7 stars · 192+ Google Reviews · LGBTQ+ Friendly",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-rose font-sans block mb-1">
                    {item.label}
                  </span>
                  <p className="text-sm text-mocha font-sans font-light leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* FIXED BUTTON */}
            <a
              href="https://maps.google.com/?q=We+You+Salon+Rohru+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border border-espresso text-espresso text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-espresso hover:text-cream transition-all duration-300 font-sans"
            >
              📍 Open in Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="border border-sand overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.294!2d77.7476!3d31.2014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEyJzA1LjAiTiA3N8KwNDQnNTEuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              title="We You Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}