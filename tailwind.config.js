/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '1440': '1440px',
      },
      colors: {
        highlight: "#75c3e6",
        highlightDark: '#cc005f',
      },
      variants: {
        textShadow: ['hover', 'focus'],
      },
    },
  },
  plugins: [
  ],
};

