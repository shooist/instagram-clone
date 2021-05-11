const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".hover-trigger .hover-target": {
          display: "none",
        },
        ".hover-trigger:hover .hover-target": {
          display: "block",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
