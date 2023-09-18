<div align="center">
    <img width="200" src="https://github.com/ursnj/nayan/blob/main/public/nayan.png?raw=true">
</div>
<h1 align="center">Nayan UI</h1>

<div align="center">

Nayan UI provides React component library based on Tailwind CSS and @shadcn/ui. This library is a collection of pre-designed and pre-built React components that can be used to quickly and easily build beautiful and functional and fully accessible user interfaces for your web application.

[![NPM version][npm-image]][npm-url] [![Follow Twitter][twitter-image]][twitter-url]

[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: http://npmjs.org/package/nayan
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/ursNjn
[linkedin-image]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/ursNj

</div>

## 🖥 Demo

Checkout demo for all the components Nayan UI exposing [Checkout](https://nayanui.com/)

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization based on Tailwind CSS.

## 🖥 Environment Support

- Modern browsers
- Server-side Rendering
- [Electron](https://www.electronjs.org/) and [Tauri](https://tauri.app/)

## 🔨 Install

```bash
npm install nayan
yarn add nayan
```

Include module in `tailwind.config.js` to read tailwind classes, this will help in reusing same tailwind classes.

```js
export default {
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
```

Add library styles to `index.css`, and update theme color variables accordingly for both light and dark modes.

```css
@tailwind base;
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
}
```

## 🕹 Usage

### Theme

```jsx
import { useState } from 'react';
import { NTheme, THEMES, useLocalStorage } from 'nayan';

const App = () => {
  const [theme, setTheme] = useLocalStorage('THEME', THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3" onClick={toggleTheme}>
        TOGGLE THEME
      </div>
    </NTheme>
  );
};

export default App;
```

For more info checkout example source code from [Github](https://github.com/ursnj/nayan) and run it in local.

## ⌨️ Development

Nayan project is included with all possible cases with examples, it can be ran locally to test each component.

```bash
$ git clone git@github.com:ursnj/nayan.git
$ cd nayan
$ npm install
$ npm start
```

Open your browser and visit http://localhost:3000

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome all contributions. You can submit any ideas as [Pull Requests](https://github.com/ursnj/nayan/pulls) or as [GitHub Issues](https://github.com/ursnj/nayan/issues). If you'd like to improve code, check out the Development Instructions and have a good time! :)
