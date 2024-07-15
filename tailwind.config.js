/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Archivo", "Arial"]
      },

      backgroundColor: {
        primary: "#111111",
        secondary: "#161616",
      },

      colors: {
        whitePrimary: "#969696",
        greenPrimary: "#2BFF7F"
      },
      
      borderWidth: {
        default: "0.5px",
      }
    },
  },
  plugins: [],
}