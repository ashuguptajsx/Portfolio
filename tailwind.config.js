

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "mono-cutive": ["Cutive Mono", "monospace"],
        // "font-family": ["EB Garamond", "serif"]
        "Lato": ["Lato", "sans-serif"],
        "In-ter": ["Inter", "sans-serif"]
        
      }
    },
  },
  plugins: [],
}