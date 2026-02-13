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
          navy: "#0b0b10", // более «грязный» тёмный фон
          gold: "#c2a15b", // тёплое золото без излишнего блеска
          light: "#e1dbcf" // тёплый светлый тон для акцентов
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(15,23,42,0.35)"
      }
    }
  },
  plugins: []
};

