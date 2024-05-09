/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '425px'
      },
      fontFamily: {
        'montse-var': ['Montserrat Variable', 'sans-serif'],
        'robo-mono-var': ['Roboto Mono Variable', 'monospace'],
      },
      boxShadow: {
        'custom-shadow': 'inset 0px -80px 30px 15px rgba(0, 0, 0, 0.95)',
        'custom-shadow-2': 'inset 1px -51px 79px 79px rgba(0,0,0,0.95)',
      },
      backgroundImage: {
        'hero-image': "url('/src/images/logo2.jpeg')",
        'content-image': "url('/src/images/background-tile.webp')",
      },
      brightness: {
        20: '20%',
      },
      width: {
        imageBig: '26rem',
        imageSmall: '23.8rem',
        105: 'calc(100vw + 2rem)',
      },
      height: {
        imageBig: '26rem',
        105: 'calc(100vh + 2rem)',
      },
      top: {
        105: '5%',
      },
      zIndex: {
        neg: '-1',
      },
      padding: {
        big: '28rem'
      },
      keyframes: {
        appear: {
          '0% 100%': { opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 }
        }
      },
      animation: {
        appear: 'appear 4s ease-in-out'
      }
    },
  },
  plugins: [],
}
