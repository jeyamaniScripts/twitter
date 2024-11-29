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
          primary: "blue", //"rgb(29,155,240)"
          secondary: "teal", //"rgb(24,24,24)"
        },
      },
    ],
  },
};
