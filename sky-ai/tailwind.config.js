/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
        "text-pulse": "textPulse 1.5s ease-in-out infinite",
      },
      keyframes: {
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
