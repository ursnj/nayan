/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './index.html', '../react/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--COLOR_PRIMARY)',
        'primary-light': 'var(--COLOR_PRIMARY_LIGHT)',
        'primary-dark': 'var(--COLOR_PRIMARY_DARK)',
        background: 'var(--COLOR_BACKGROUND)',
        text: 'var(--COLOR_TEXT)',
        muted: 'var(--COLOR_MUTED)',
        border: 'var(--COLOR_BORDER)',
        card: 'var(--COLOR_CARD)',
        shadow: 'var(--COLOR_SHADOW)',
        overlay: 'var(--COLOR_OVERLAY)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
