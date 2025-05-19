/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-moving': 'linear-gradient(-45deg, #ff6ec4, #7873f5, #4ade80, #facc15)',
        },
        backgroundSize: {
          'size-400': '400% 400%',
        },
        animation: {
          'gradient-x': 'gradient-x 8s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
          },
        },
      },
    },
    plugins: [],
  }

