/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montse-var': ['Montserrat Variable', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': 'inset 0px -120px 30px 15px rgba(0, 0, 0, 0.75)',
      },
      backgroundImage: {
        'hero-image': "url('/src/images/logo2.jpeg')",
        'content-image':
          "background-image: url('/src/images/background-tile.webp')",
      },
      brightness: {
        20: '20%',
      },
      width: {
        120: '120%',
      },
      height: {
        120: '120%',
      },
      zIndex: {
        neg: '-1',
      },
    },
  },
  plugins: [],
}
