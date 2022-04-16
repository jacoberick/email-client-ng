module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "5px": ".3125rem",
        "13px": ".85rem",
        "3.5xl": "2rem",
      },
      colors: {
        black: "#121212",
        purple: "#7A28FF",
      },
      boxShadow: {
        backToHome: "0 0px 20px rgba(122, 40, 255, 0.8)",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
