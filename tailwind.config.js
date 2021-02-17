module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"]
    },
    extend: {
      colors: {
        background: {
          100: "#0D1117",
          200: "#161A22"
        },
        primary: {
          100: "#ff9292",
          200: "#ffb4b4"
        },
        secondary: "#0f3460",
        text: "#ffffffde",
        warning: "#ff4646"
      }
    },

    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "0": "0",
      "20": "20deg",
      "45": "45deg",
      "90": "90deg",
      "135": "135deg",
      "180": "180deg",
      "360": "360deg"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
