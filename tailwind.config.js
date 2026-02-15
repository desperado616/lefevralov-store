/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b0b10",
          gold: "#c2a15b",
          "gold-light": "#d4b96d",
          "gold-dark": "#a88b4a",
          light: "#e1dbcf"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(15,23,42,0.35)",
        "card-hover": "0 24px 48px rgba(0,0,0,0.42), 0 0 0 1px rgba(194,161,91,0.15)",
        "gold-soft": "0 4px 24px rgba(194,161,91,0.26)"
      }
    }
  },
  plugins: []
};

