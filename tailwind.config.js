module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        yellow: {
          950: "#f6c92d",
        },
        blue: {
          950: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
