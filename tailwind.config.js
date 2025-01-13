/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",

      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",

      "forest",
      "aqua",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",

      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  plugins: [require("daisyui")],
};
