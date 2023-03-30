/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: 'var(--display-font)',
      body: 'var(--body-font)',
    },
    extend: {
      colors: {
        'main-color': '#CA5C2D',
        'main-light': '#E7E1D0',
        'main-dark': '#1A2125',
      },
    },
  },
  plugins: [],
};
