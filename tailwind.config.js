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
        xxs: ".6875rem",
        "13px": ".85rem",
        "1.5xl": "1.32rem",
        "3.5xl": "2rem",
      },
      colors: {
        black: "#121212",
        purple: "#7A28FF",
        lavender: "#c39eff",
      },
      boxShadow: {
        backToHome: "0 0px 20px rgba(122, 40, 255, 0.8)",
      },
      borderWidth: {
        3: "3px",
      },
      minHeight: {
        topBot: "40rem",
        infoLand: "50rem",
      },
      maxWidth: {
        "6.5xl": "75rem",
        sidebar: "16rem",
      },
      lineHeight: {
        goosey: "2.8rem",
        lazy: "5.5rem",
      },
    },
  },
  plugins: [],
};
