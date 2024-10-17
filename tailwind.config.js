/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prime: ["Afacad Flux", "sans-serif"],
      },
      colors: {
        "primry-color": "#151515",
        "text-white-500": "#EEEEEE"
      },
    },
  },
  plugins: [],
};
