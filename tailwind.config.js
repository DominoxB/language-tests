/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: ['"Open Sans"'],
        courgette: ['"Courgette"'],
        slab: ['"Roboto Slab"']
      },
      backgroundImage: {
        test: "url('@/img/answer-sheet1.jpg')",
        english: "url('@/img/english.jpg')",
        russian: "url('@/img/matr.jpg')"
      },
    },
  },
  plugins: [],
};
