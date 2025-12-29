// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|button|divider|ripple|spinner).js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        personalF: {
          100: "var(--personalF-100)",
          200: "var(--personalF-200)",
          300: "var(--personalF-300)",
          400: "green",
        },
      },
    },
  },
  plugins: [heroui()],
};

