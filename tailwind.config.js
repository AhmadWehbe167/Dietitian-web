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
      mini: "375px",
      mb: "480px",
      sm: "640px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#4A78A3",
        secondary: "#3C4856",
        lightText: "#777777",
        free: "#67D2D0",
        basic: "#86E5FB",
        premium: "#F8988F",
        cardUpper: "#85A5C2",
        cardLower: "#D1DCE8",
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
        "slide-from-left": {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-right": {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "right-floating": "floatRight 6s linear infinite",
        "left-floating": "floatLeft 6s linear infinite",
        "slide-in-left":
          "slide-from-left 1s 100ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-right":
          "slide-from-right 1s 100ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-top":
          "slide-in-top 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      maxWidth: {
        250: "250px",
      },
    },
  },
  plugins: [],
};
