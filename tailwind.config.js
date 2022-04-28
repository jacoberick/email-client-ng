module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        arial: ["Arimo", "sans-serif"],
      },
      fontSize: {
        "5px": ".3125rem",
        xxs: ".6875rem",
        "13px": ".85rem",
        "1.5xl": "1.32rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
      },
      colors: {
        black: "#121212",
        transpBlack: "rgba(18,18,18, 0.5)",
        purple: "#7A28FF",
        lavender: "#c39eff",
        translucentPurp: "#e1cfff",
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
        "2.5xl": "44rem",
        "3.5xl": "49rem",
        "6.5xl": "75rem",
      },
      minWidth: {
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
