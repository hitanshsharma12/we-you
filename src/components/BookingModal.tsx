"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Haircut & Styling", "Facial",
  "Waxing", "Bridal Makeup",
  "Hair Color", "Nail Art",
  "Threading", "Blowout",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "", phone: "", datetime: "", people: "1", note: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const sendToWhatsApp = () => {
    const dtStr = form.datetime
      ? new Date(form.datetime).toLocaleString("en-IN", {
          dateStyle: "long", timeStyle: "short",
        })
      : "Flexible";
    const services = selectedServices.length
      ? selectedServices.join(", ")
      : "To be discussed";

    const msg = `Hello We You Salon! 🌸\n\nBooking Request:\n\n👤 Name: ${form.name || "Guest"}\n📞 Phone: ${form.phone || "Not provided"}\n📅 Date & Time: ${dtStr}\n👥 People: ${form.people}\n💇 Services: ${services}${form.note ? "\n📝 Note: " + form.note : ""}\n\nKindly confirm. Thank you!`;

    window.open(
      `https://wa.me/917018796714?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(4,3,2,0.92)",
          zIndex: 9000,
          backdropFilter: "blur(6px)",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9001,
        width: "calc(100% - 32px)",
        maxWidth: "480px",
        maxHeight: "90vh",
        overflowY: "auto",
        backgroundColor: "#0f0d09",
        border: "1px solid rgba(201,169,110,0.25)",
      }}>

        {/* Gold top accent line */}
        <div style={{
          height: "2px",
          background: "linear-gradient(to right, transparent, #c9a96e, transparent)",
        }} />

        {/* Header */}
        <div style={{
          padding: "28px 32px 20px",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
          position: "relative",
        }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "20px", right: "20px",
              background: "none", border: "none", cursor: "pointer",
              color: "#6b6055", padding: "4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6055")}
          >
            <X size={18} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span style={{ color: "#c9a96e", fontSize: "14px" }}>✦</span>
            <p style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "30px", fontWeight: 300,
              color: "#f5f0e8", margin: 0, letterSpacing: "0.02em",
            }}>
              Book Your Visit
            </p>
          </div>
          <p style={{
            fontSize: "9px", letterSpacing: "0.45em",
            textTransform: "uppercase", color: "#6b6055",
            fontFamily: "var(--font-jost), sans-serif", margin: 0,
          }}>
            We You Salon · Rohru, Himachal Pradesh
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* Name */}
          <div>
            <label style={labelStyle}>Your Name</label>
            <input
              type="text" placeholder="e.g. Priya Sharma"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
            />
          </div>

          {/* Phone */}
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel" placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
            />
          </div>

          {/* Date & Time */}
          <div>
            <label style={labelStyle}>Preferred Date & Time</label>
            <input
              type="datetime-local"
              value={form.datetime}
              onChange={(e) => setForm({ ...form, datetime: e.target.value })}
              style={{ ...inputStyle, colorScheme: "dark" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
            />
          </div>

          {/* People */}
          <div>
            <label style={labelStyle}>Number of People</label>
            <select
              value={form.people}
              onChange={(e) => setForm({ ...form, people: e.target.value })}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4+">4+ People (Group)</option>
            </select>
          </div>

          {/* Services */}
          <div>
            <label style={labelStyle}>Services Needed</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {SERVICES.map((s) => {
                const active = selectedServices.includes(s);
                return (
                  <button
                    key={s} type="button"
                    onClick={() => toggleService(s)}
                    style={{
                      padding: "11px 8px",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      fontFamily: "var(--font-jost), sans-serif",
                      border: `1px solid ${active ? "#c9a96e" : "rgba(201,169,110,0.15)"}`,
                      backgroundColor: active ? "rgba(201,169,110,0.12)" : "transparent",
                      color: active ? "#c9a96e" : "#6b6055",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textTransform: "uppercase",
                    }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Note */}
          <div>
            <label style={labelStyle}>Special Request</label>
            <textarea
              placeholder="Anything you'd like us to know..."
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a96e"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
            />
          </div>

          {/* WhatsApp CTA */}
          <button
            type="button"
            onClick={sendToWhatsApp}
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #25D366, #1da851)",
              color: "#fff",
              padding: "17px",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span style={{ fontSize: "16px" }}>📲</span>
            Confirm on WhatsApp
          </button>

          <p style={{
            textAlign: "center", fontSize: "10px",
            color: "#4a3f35", fontFamily: "var(--font-jost), sans-serif",
            letterSpacing: "0.05em",
          }}>
            You'll be redirected to WhatsApp to confirm your appointment
          </p>
        </div>

        {/* Gold bottom accent */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #c9a96e, transparent)",
        }} />
      </div>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "9px",
  letterSpacing: "0.4em",
  textTransform: "uppercase",
  color: "#6b6055",
  fontFamily: "var(--font-jost), sans-serif",
  marginBottom: "10px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(201,169,110,0.2)",
  padding: "13px 16px",
  fontSize: "13px",
  color: "#f5f0e8",
  fontFamily: "var(--font-jost), sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s",
};