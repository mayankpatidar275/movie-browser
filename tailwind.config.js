/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via class toggling
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        // primary: "#e4e4e4",
        // secondary: "#1F2937",
        secondary: "#010101",
      },
    },
  },
  plugins: [],
};
