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
        'hero-bg-image': "url('/src/images/festival-bg.avif')"
      }
    },
  },
  plugins: [],
}
