module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      handWrite: ["Gloria Hallelujah", "cursive"],
    },
    extend: {
      scale: {
        0.97: 0.97,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
