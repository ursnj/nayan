/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#005ee6',
        'primary-dark': '#0043a3',
        'primary-light': '#0069ff'
      }
    }
  },
  plugins: []
};
