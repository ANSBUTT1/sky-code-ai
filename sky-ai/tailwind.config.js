/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"], },
    extend: {
      colors: {
        primaryColor: "#a64d79",
        secondaryColor: "#6a1e55",
        darkColor: "#1a1a1d",
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
        innerGlow:
          "inset 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)",
      },
      animation: {
        'bounce-once': 'bounce 4s ',
        fadeIn: 'fadeIn 1s ease-in forwards',
        "text-pulse": "textPulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        textPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
