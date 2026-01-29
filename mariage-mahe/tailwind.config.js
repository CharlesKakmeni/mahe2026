/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 🎨 Palette mariée */
        cream: "#F1E6E1",
        peach: "#F5DACD",
        coral: "#D47159",
        latte: "#D99A72",
        rain: "#D5DEDB",
        eucalyptus: "#9FA093",

        /* ✅ Sémantique du site (ne casse rien) */
        ink: "#1F1B17",
        muted: "#6B645E",

        /**
         * forest / moss :
         * - utilisés pour bandeaux / bouton / countdown
         * - on reste sur un eucalyptus "plus profond" pour garder du contraste avec text-cream
         */
        forest: "#6F756A", // eucalyptus deep (plus clair que ton ancien vert)
        moss: "#4B4E45",   // eucalyptus plus profond pour hover / variantes

        /* accents (timeline, +, détails) */
        gold: "#D99A72", // latte (chic et cohérent)
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};