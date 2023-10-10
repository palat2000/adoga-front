/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C95E1",
        darkBlue: "#35425B",
        bgPrimary: "#B6B5B5",
      },
    },
  },
  plugins: [require("daisyui")],
};
