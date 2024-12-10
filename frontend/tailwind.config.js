/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          primary: "rgb(29,155,240)", //"rgb(29,155,240)"
          secondary: "rgb(24,24,24)", //"rgb(24,24,24)"
        },
      },
    ],
  },
};
