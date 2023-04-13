<div align="center">
    <img width="200" src="https://github.com/ursnj/nayan/blob/main/public/nayan.png?raw=true">
</div>
<h1 align="center">Nayan - React Component Library</h1>

<div align="center">

Nayan is React based component library based on Tailwind CSS and Headless UI. This library is a collection of pre-designed and pre-built React components that can be used to quickly and easily build beautiful and functional user interfaces for your web application.

[![NPM version][npm-image]][npm-url] [![Follow Twitter][twitter-image]][twitter-url] [![Follow Linked In][linkedin-image]][linkedin-url]

[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: http://npmjs.org/package/nayan
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/ursNjn
[linkedin-image]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/ursNj

</div>

## Install

With npm:

```bash
npm install nayan
```

With yarn:

```bash
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
    extend: {}
  },
  plugins: []
};
```

Add library styles to `index.css`, and update theme color variables accordingly for both light and dark modes.

```css
@import './node_modules/nayan/dist/style.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --COLOR_PRIMARY: #0069ff;
  --COLOR_BACKGROUND: #f5f5f5;
  --COLOR_CARD: #ffffff;
  --COLOR_TEXT: #050505;
  --COLOR_BORDER: #d3d3d3;
  --COLOR_MODAL_BACKDROP: rgba(255, 255, 255, 0.7);
}

[data-theme='dark'] {
  --COLOR_PRIMARY: #0069ff;
  --COLOR_BACKGROUND: #1f1f1f;
  --COLOR_CARD: #303030;
  --COLOR_TEXT: #f5f5f5;
  --COLOR_BORDER: #505050;
  --COLOR_MODAL_BACKDROP: rgba(0, 0, 0, 0.7);
}
```

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
- [Electron](https://www.electronjs.org/)

## 🔨 Usage

```jsx
import React from 'react';
import { NButton } from 'nayan';

const App = () => <NButton text="Submit" />;

export default App;
```

For more examples checkout [component wise examples](https://github.com/ursnj/nayan/tree/main/src/examples).

## ⌨️ Development

Nayan project is included with all possible cases with examples, it can be ran locally to test each component.

```bash
$ git clone git@github.com:uranj/nayan.git
$ cd nayan
$ npm install
$ npm start
```

Open your browser and visit http://localhost:3000

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome all contributions. You can submit any ideas as [Pull Requests](https://github.com/ursnj/nayan/pulls) or as [GitHub Issues](https://github.com/ursnj/nayan/issues). If you'd like to improve code, check out the Development Instructions and have a good time! :)
