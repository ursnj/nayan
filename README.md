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

### Alert

```tsx
import { AlertTypes, NAlert } from '../components/NAlert';

const AlertExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Alert:</h1>
      <NAlert type={AlertTypes.INFO} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.SUCCESS} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.WARNING} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.ERROR} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
    </>
  );
};

export default AlertExample;
```

### Badge

```tsx
import { BadgeSize, NBadge } from '../components/NBadge';

const BadgeExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Badge:</h1>
      <NBadge size={BadgeSize.XS} name="Sample" onClose={() => console.log('Badge closed')} className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={BadgeSize.SM} name="Sample" onClose={() => console.log('Badge closed')} className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={BadgeSize.MD} name="Sample" onClose={() => console.log('Badge closed')} className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={BadgeSize.LG} name="Sample" onClose={() => console.log('Badge closed')} className="text-red-700 bg-red-300 mr-2" />
    </>
  );
};

export default BadgeExample;
```

### Combobox

```tsx
import { NCombo } from '../components/NCombo';
import { useState } from 'react';

const items = [
  { id: '1', label: 'Wade Cooper' },
  { id: '2', label: 'Arlene Mccoy' },
  { id: '3', label: 'Devon Webb' },
  { id: '4', label: 'Tom Cook' },
  { id: '5', label: 'Tanya Fox' },
  { id: '6', label: 'Hellen Schmidt', disable: true }
];

const SelectExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState([items[0]]);

  return (
    <div>
      <h1 className="nyn-text mb-3 text-lg">Combo Single:</h1>
      <NCombo items={items} selected={selected} onSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Combo Multi:</h1>
      <NCombo items={items} selected={selected1} onSelected={setSelected1} />
    </div>
  );
};

export default SelectExample;
```

### Dialog

```tsx
import { NDialog } from '../components/NDialog';
import { useState } from 'react';
import { NButton } from '../components/NButton';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <NDialog
        trigger={
          <NButton className="text-sm font-medium text-white bg-green-500 hover:bg-green-600" text="Open Dialog" onClick={() => setIsOpen(true)} />
        }
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NDialog>
    </>
  );
};

export default DialogExample;
```

### Disclosure

```tsx
import { NDisclosure } from '../components/NDisclosure';

const DisClosureExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg">Disclosure:</h1>
      <NDisclosure title="Enable Notifications" text="Enable Notifications Description." />
    </>
  );
};

export default DisClosureExample;
```

### Input

```tsx
import { NInput } from '../components/NInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputExample = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Custom Input:</h1>
      <NInput type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="nyn-text mb-3 mt-3 text-lg text-left">React Hook Form Input:</h1>
        <NInput
          type="email"
          label="Email"
          placeholder="Enter email"
          className="mb-3"
          defaultValue="niranjan.devasani@gmail.com"
          {...register('email')}
        />
      </form>
    </>
  );
};

export default InputExample;
```

### Menu

```tsx
import { NMenu } from '../components/NMenu';
import { NMenuItem } from '../components/NMenuItem';
import { NDivider } from '../components/NDivider';
import { NButton } from '../components/NButton';

const MenuExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NMenu trigger={<NButton className="text-sm font-medium text-white bg-red-500 hover:bg-red-600" text="Open Menu" />}>
        <>
          <NMenuItem>
            <button className="nyn-text flex w-full items-center rounded px-3 py-2 text-sm">Edit</button>
          </NMenuItem>
          <NDivider />
          <NMenuItem>
            <button className="flex w-full items-center rounded px-3 py-2 text-sm text-red-500">Delete</button>
          </NMenuItem>
        </>
      </NMenu>
    </>
  );
};

export default MenuExample;
```

### Popover

```tsx
import { NPopover } from '../components/NPopover';
import { NButton } from '../components/NButton';

const PopoverExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Popover:</h1>
      <NPopover trigger={<NButton className="text-sm font-medium text-white bg-primary hover:bg-primary-dark" text="Open Popup" />}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium nyn-text">Documentation</div>
          <div className="text-sm nyn-text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>
    </>
  );
};

export default PopoverExample;
```

### Radio Group

```tsx
import { useState } from 'react';
import { NRadioGroup } from '../components/NRadioGroup';

const items = [
  { id: '1', label: 'Startup' },
  { id: '2', label: 'Business' },
  { id: '3', label: 'Enterprise' }
];

const RadioGroupExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState(items[0]);

  return (
    <>
      <h1 className="nyn-text mb-3 text-lg">Radio Group Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Radio Group Vertical:</h1>
      <NRadioGroup isVertical={true} items={items} selected={selected1} setSelected={setSelected1} />
    </>
  );
};

export default RadioGroupExample;
```

### Select

```tsx
import { NSelect } from '../components/NSelect';
import { useState } from 'react';

const items = [
  { id: '1', label: 'Wade Cooper' },
  { id: '2', label: 'Arlene Mccoy' },
  { id: '3', label: 'Devon Webb' },
  { id: '4', label: 'Tom Cook' },
  { id: '5', label: 'Tanya Fox' },
  { id: '6', label: 'Hellen Schmidt', disable: true }
];

const SelectExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState([items[0]]);

  return (
    <div>
      <h1 className="nyn-text mb-3 text-lg">Select Single:</h1>
      <NSelect items={items} selected={selected} onSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Select Multi:</h1>
      <NSelect items={items} selected={selected1} onSelected={setSelected1} />
    </div>
  );
};

export default SelectExample;
```

### Switch

```tsx
import { useState } from 'react';
import { NSwitch } from '../components/NSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Switch:</h1>
      <NSwitch enabled={enabled} setEnabled={setEnabled} />
    </>
  );
};

export default SwitchExample;
```

### Tabs

```tsx
import { NTabs } from '../components/NTabs';
import { useState } from 'react';
import { NTabsContent } from '../components/NTabsContent';

const tabs = ['Posts', 'Saved'];

const TabsExample = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 py-2 nyn-text">Content1</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text">Content2</NTabsContent>
      </NTabs>
      <h1 className="nyn-text mb-3 mt-3 text-lg text-left">Tabs Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 p-2 nyn-text">Content3</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text">Content4</NTabsContent>
      </NTabs>
    </>
  );
};

export default TabsExample;
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
