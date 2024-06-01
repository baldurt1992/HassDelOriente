/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./src/view/*.html",
    "./src/view/LoginView.html",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1520px",
    },
    colors: {
      primary: "#629C44",
      secundary: "#214e0a",
      white: "#ffffff",
      black: "#000000",
      inactive: "#848484",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      custom: "2.5rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus", "group-hover"],
      textColor: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
