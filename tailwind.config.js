/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        clothes: "url('/public/img/clothes_bg.jpg')",
      },
    },
  },
  plugins: [],
};
