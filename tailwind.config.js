/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "@tablet": "640px",

      "@laptop": "1024px",

      "@desktop": "1280px",
    },
    extend: {
      backgroundImage: {
        heroBg: "url('../assets/bg-hero.svg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        h1Mobile: "2.5rem",
      },
      width: {
        areaImageMobile: "43.75rem",
      },
      maxWidth: {
        grid: "77.5rem",
        cardNft: "17.4rem",
        cardCollector: "37rem",
        logoMobile: "10rem",
        areaNav: "48.3rem",
        leftContFooter: "20.25rem",
        paragraphHero: "41.1rem",
      },
      height: {
        areaImageNft: "14.7rem",
        areaImageMobile: "15.3rem",
        areaImageDesktop: "26.6rem",
      },
      colors: {
        "blue-primary": "#1D4FFE",
        "green-primary": "#4BCE97",
        "card-nft": "#131317",
        fav: "#05030A",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
