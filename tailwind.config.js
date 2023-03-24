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
        'primary-color': '#7B0D1E',
        'primary-color-light': '#9F2042',
        'primary-color-dark': '#3D1308',
        'primary-black': '#0F0802',
        'primary-white': '#F8E5EE',
      },
    },
  },
  plugins: [],
};
