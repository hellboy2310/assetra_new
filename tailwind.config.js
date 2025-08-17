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
        white: "#FAFAFA"
      },
      fontSize: {
        h1: "56px",
        h2: "32px",
        h4:"30px",
        h3: "24px",
        nav: "20px",
      },
    },
  },
  plugins: [],
}

