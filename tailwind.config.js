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
      fontSize: {
        h1: "56px",
        h2: "32px",
        h3: "30px",
        h4: "28px",
        h5: "24px",
        medSmall: "18px",
        small:'16px',
        nav: "20px",
      },
    },
  },
  plugins: [],
}

