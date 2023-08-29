/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: ['"Open Sans"'],
        courgette: ['"Courgette"']
      },
      backgroundImage: {
        test: "url('/src/components/img/answer-sheet1.jpg')",
      },
    },
  },
  plugins: [],
};
