/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "7xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "9xl": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      colors: {
        hovercolor: "#000000",
      },
    },
    fontFamily: {
      lato: ["Lato","sans-serif"],
      Mont: ["Montserrat","sans-serif"],
      lobster: "Lobster Two,cursive",
      roboto: "Roboto,sans-serif",
      rozha: "Rozha One, serif",
      poppins: "Poppins,sans-serif",
      abhaya: "Abhaya Libre",
      helvetica: "Helvetica,Arial",
      nunito: ["nunito", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
      

    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }
      xs: "440px",
      // => @media (min-width: 440px) { ... }
      "600px": "600px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }
      "700px": "700px",

      md: "794px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
};
