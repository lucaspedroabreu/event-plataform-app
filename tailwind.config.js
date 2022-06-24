/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur-bg.png)",
      },
      fontFamily: {
        sans: "Roboto, system-ui, sans-serif",
      },
      colors: {
        primary: {
          green: {
            regular: "#00875F",
            dark: "#015F43",
            light: "#00B37E",
          },
          blue: "#81D8F7",
          warning: "#FBA94C",
          redError: "#F75A68",
          gray: {
            background: "#09090A",
            elements: "#121214",
            bars: "#121214",
            strokeDivider: "#323238",
            tittle: "#E1E1E6",
            text: "#C4C4CC",
            textSecondary: "#8D8D99",
          },
        },
      },
    },
  },
  plugins: [],
}
