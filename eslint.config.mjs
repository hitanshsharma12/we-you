import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
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