/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C96CC",
        secondary: "#3C4856",
        lightText: "#777777",
      },
      fontFamily: {
        inter: ["Inter"],
        opensans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
