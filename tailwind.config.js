/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Moul, serif', 
        nav: 'Open Sans, sans-serif',
        normal: 'Ubuntu, sans-serif',
      },
      backgroundImage: {
        'hero-img': "url('/hero.png')",
        'hero-img-m': "url('/hero-m.png')",
      }
    },
  },
  plugins: [],
}