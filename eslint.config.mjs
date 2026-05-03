/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: "#080604",
        dark: "#0f0d09",
        dark2: "#161310",
        dark3: "#1e1a14",
        gold: "#c9a96e",
        "gold-light": "#e8d5b0",
        "gold-dark": "#8a6d3b",
        "gold-muted": "#6b5432",
        ivory: "#f5f0e8",
        muted: "#6b6055",

        cream: "#faf6f0",
        linen: "#f2ebe0",
        sand: "#e8ddd0",
        taupe: "#c4b5a5",
        mocha: "#8b6f5e",
        espresso: "#4a3728",
        blush: "#e8c4b8",
        rose: "#c9947f",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;