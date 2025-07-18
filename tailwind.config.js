/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['Spectral', 'serif'],
      },
      keyframes: {
        zoomBlink: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
      },
      animation: {
        zoomBlink: 'zoomBlink 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}