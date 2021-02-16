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
          100: "#1a1a2e",
          200: "#16213e"
        },
        primary: "#e94560",
        secondary: "#0f3460"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
