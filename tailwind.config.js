/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    boxShadow: {
      'custom': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    letterSpacing: {
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        'helvetica': ['HelveticaNeue', 'sans-serif'],
        'helvetica-light': ['HelveticaNeueLight', 'sans-serif'],
        'helvetica-bold': ['HelveticaNeueBold', 'sans-serif'],
        'helvetica-ultralight': ['HelveticaNeueUltraLight', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        'pink': '#FF3E75',
        'blue': '#0016FF',
        'lightgreen': '#ADFC92',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
}
