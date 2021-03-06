module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: { borderColor: ["responsive", "hover", "focus", "focus-within"] },
  plugins: [],
};
