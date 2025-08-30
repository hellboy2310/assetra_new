/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryColor: "#008080",
        customGray: "#6B6B6B",
        white: "#FAFAFA",
        lightGrayBg: "#F4F6F7",
        blackfont: '#202020',
        blackDiffType: '#212121',
      },
      letterSpacing: {
        '2p': '0.02em', // custom utility for ~2% letter spacing
      },
      fontSize: {
        h1: "56px",
        h2: "32px",
        h3: "30px",
        h4: "28px",
        h5: "24px",
        h6: "20px",
        h7: "36px",
        h8: "38px",
        medSmall: "18px",
        small: '16px',
        verySmall: '14px',
        nav: "20px",
      },
    },
  },
  plugins: [],
}

