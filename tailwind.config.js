/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#040b14",
        panel: "#0d1725",
        accent: "#9ce1ff",
        accentStrong: "#78d1ff",
        mint: "#8cf0d6",
        soft: "#e6effa"
      },
      boxShadow: {
        glow: "0 0 40px rgba(120, 209, 255, 0.25)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
