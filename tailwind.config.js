/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#B4F461",
      },
    },
  },
  plugins: [require("daisyui")],
};
