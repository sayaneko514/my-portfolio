/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#75c3e6",
        highlightDark: '#cc005f',
        primaryText: '#888888',
        secondaryText: '#7d7d7d',
        tertiaryText: '#6e6e6e',
      },
      variants: {
        textShadow: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
};

