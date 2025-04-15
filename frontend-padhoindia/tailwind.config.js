/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkBg: {
          '0%': { background: 'linear-gradient(135deg, #D32F2F, #6A1B9A)' },
          '100%': { background: 'linear-gradient(135deg, #6A1B9A, #D32F2F)' }, 
        },
      },
      animation: {
        blinkBg: 'blinkBg 1s infinite',
      },
    },
  },
  plugins: [],
}
