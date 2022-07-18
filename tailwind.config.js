const colors = require("./colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.tsx", "./lib/**/*.tsx"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
