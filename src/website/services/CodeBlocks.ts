export const installCode = `npm install nayan
yarn add nayan`;

export const tailwindCode = `export default {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/nayan/dist/index.es.js' // Check node_modules path properly
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--COLOR_PRIMARY)',
        'primary-light': 'var(--COLOR_PRIMARY_LIGHT)',
        'primary-dark': 'var(--COLOR_PRIMARY_DARK)',
        background: 'var(--COLOR_BACKGROUND)',
        text: 'var(--COLOR_TEXT)',
        border: 'var(--COLOR_BORDER)',
        card: 'var(--COLOR_CARD)',
        shadow: 'var(--COLOR_SHADOW)',
        overlay: 'var(--COLOR_OVERLAY)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
`;

export const cssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --COLOR_PRIMARY: #005ee6;
    --COLOR_PRIMARY_DARK: #0043a3;
    --COLOR_PRIMARY_LIGHT: #0069ff;
    --COLOR_BACKGROUND: #f5f5f5;
    --COLOR_CARD: #ffffff;
    --COLOR_TEXT: #050505;
    --COLOR_BORDER: #d3d3d3;
    --COLOR_SHADOW: #d3d3d3;
    --COLOR_OVERLAY: rgba(255, 255, 255, 0.7);
  }

  [data-theme='dark'] {
    --COLOR_PRIMARY: #005ee6;
    --COLOR_PRIMARY_DARK: #0043a3;
    --COLOR_PRIMARY_LIGHT: #0069ff;
    --COLOR_BACKGROUND: #1f1f1f;
    --COLOR_CARD: #303030;
    --COLOR_TEXT: #f5f5f5;
    --COLOR_BORDER: #505050;
    --COLOR_SHADOW: #cbcbcb;
    --COLOR_OVERLAY: rgba(0, 0, 0, 0.7);
  }

  body {
    color: var(--COLOR_TEXT) !important;
    background-color: var(--COLOR_BACKGROUND) !important;
  }
}`;

export const appCode = `import { useState } from 'react';
import { NTheme, THEMES, useLocalStorage } from 'nayan';

const App = () => {
  const [theme, setTheme] = useLocalStorage('THEME', THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3" onClick={toggleTheme}>TOGGLE THEME</div>
    </NTheme>
  );
};

export default App;`;
