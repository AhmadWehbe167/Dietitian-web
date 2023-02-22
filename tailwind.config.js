/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mb: "480px",
      sm: "640px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#4A78A3",
        secondary: "#3C4856",
        lightText: "#777777",
      },
      fontFamily: {
        inter: ["Inter"],
        opensans: ["Open Sans"],
      },
      keyframes: {
        floatRight: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(5px, -5px)" },
          "20%": { transform: "translate(10px, -10px)" },
          "30%": { transform: "translate(15px, -15px)" },
          "40%": { transform: "translate(20px, -20px)" },
          "50%": { transform: "translate(25px, -25px)" },
          "60%": { transform: "translate(20px, -20px)" },
          "70%": { transform: "translate(15px, -15px)" },
          "80%": { transform: "translate(10px, -10px)" },
          "90%": { transform: "translate(5px, -5px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        floatLeft: {
          "0%": { transform: "translate(-25px, -25px)" },
          "10%": { transform: "translate(-20px, -20px)" },
          "20%": { transform: "translate(-15px, -15px)" },
          "30%": { transform: "translate(-10px, -10px)" },
          "40%": { transform: "translate(-5px, -5px)" },
          "50%": { transform: "translate(0, 0)" },
          "60%": { transform: "translate(-5px, -5px)" },
          "70%": { transform: "translate(-10px, -10px)" },
          "80%": { transform: "translate(-15px, -15px)" },
          "90%": { transform: "translate(-20px, -20px)" },
          "100%": { transform: "translate(-25px, -25px)" },
        },
      },
      animation: {
        "right-floating": "floatRight 6s linear infinite",
        "left-floating": "floatLeft 6s linear infinite",
      },
    },
  },
  plugins: [],
};
