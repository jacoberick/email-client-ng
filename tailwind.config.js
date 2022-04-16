module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "2rem",
      },
      colors: {
        black: "#121212",
        purple: "#7A28FF",
      },
      boxShadow: {
        backToHome: "0 0px 20px rgba(122, 40, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
