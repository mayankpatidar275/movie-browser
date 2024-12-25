/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via class toggling
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#010101",
        tertiary: "#333333",
      },
    },
  },
  plugins: [],
};
