/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      man: ["Manrope"],
    },
    extend: {
      colors: {
        "light-green": "#54E6AF",
        "dark-gray": "#2C344B",
        "black": "#121725",
        "light-gray": "#C2CBE5",
      },
    },
  },
  plugins: [],
};
