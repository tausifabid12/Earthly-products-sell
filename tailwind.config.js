/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#A259FF',

          secondary: '#3B3B3B',

          accent: '#2B2B2B',

          neutral: '#232131',

          'base-100': '#F5F5FA',

          info: '#7EBDF1',

          success: '#58E997',

          warning: '#975107',

          error: '#F76B69',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
