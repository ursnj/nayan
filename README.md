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

## 🔨 Usage

### Theme

```jsx
import { useState } from 'react';
import { NTheme } from './components/NTheme';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3">Your content goes here.</div>
    </NTheme>
  );
};

export default App;
```

### Alert

```jsx
import { AlertTypes, NAlert } from '../components/NAlert';

const AlertExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Alert:</h1>
      <NAlert type={AlertTypes.DEFAULT} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.INFO} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.SUCCESS} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.WARNING} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.ERROR} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
    </div>
  );
};

export default AlertExample;
```

### Badge

```jsx
import { NBadge } from '../components/NBadge';
import { Size } from '../components/Types';

const BadgeExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Badge:</h1>
      <NBadge size={Size.XS} name="Sample" onClose={() => console.log('Badge closed')} className="nyn-text nyn-background-card nyn-border mr-2" />
      <NBadge size={Size.XS} name="Sample" onClose={() => console.log('Badge closed')} className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={Size.SM} name="Sample" onClose={() => console.log('Badge closed')} className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={Size.MD} name="Sample" onClose={() => console.log('Badge closed')} className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={Size.LG} name="Sample" onClose={() => console.log('Badge closed')} className="text-red-700 bg-red-300 mr-2" />
    </div>
  );
};

export default BadgeExample;
```

### Button

```jsx
import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const ButtonExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg text-left">Buttons:</h1>
      <NButton size={Size.XS} onClick={() => console.log('Button clicked')} className="nyn-text nyn-background-card nyn-border mr-2">
        Button
      </NButton>
      <NButton
        size={Size.XS}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.SM}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.MD}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-red-500 hover:bg-red-600 border border-red-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-orange-600 hover:text-white bg-transparent hover:bg-red-600 border border-orange-600 mr-2">
        Button
      </NButton>
      <NButton
        isPill={true}
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 mr-2">
        Button
      </NButton>
    </div>
  );
};

export default ButtonExample;
```

### Card

```jsx
import { NCard } from '../components/NCard';

const CardExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Card:</h1>
      <NCard className="p-2">
        <div className="nyn-text">Sample Card</div>
      </NCard>
    </div>
  );
};

export default CardExample;
```

### Checkbox

```jsx
import { NCheck } from '../components/NCheck';
import { useState } from 'react';
import { NLink } from '../components/NLink';
import { NText } from '../components/NText';
import { Size } from '../components/Types';

const CheckExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Checkbox:</h1>
      <NCheck size={Size.XS} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.SM} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.MD} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.LG} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
    </div>
  );
};

export default CheckExample;
```

### Combo box

```jsx
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
    <div className="my-10">
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

```jsx
import { NDialog } from '../components/NDialog';
import { useState } from 'react';
import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <NDialog
        size={Size.SM}
        isOpen={isOpen}
        isDismissable={true}
        title="Payment confirmation"
        closeModal={() => setIsOpen(false)}
        trigger={
          <NButton className="text-sm font-medium text-white bg-green-500 hover:bg-green-600" onClick={() => setIsOpen(true)}>
            Open Dialog
          </NButton>
        }>
        <div className="p-3 w-full h-full">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NDialog>
    </div>
  );
};

export default DialogExample;
```

### Disclosure

```jsx
import { NDisclosure } from '../components/NDisclosure';

const DisClosureExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Disclosure:</h1>
      <NDisclosure title="Enable Notifications" text="Enable Notifications Description." />
    </div>
  );
};

export default DisClosureExample;
```

### Divider

```jsx
import { NDivider } from '../components/NDivider';

const DividerExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Divider:</h1>
      <NDivider className="my-3" />
    </div>
  );
};

export default DividerExample;
```

### Input

```jsx
import { NInput } from '../components/NInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputExample = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="my-10">
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
    </div>
  );
};

export default InputExample;
```

### Link

```jsx
import { NLink } from '../components/NLink';

const LinkExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Links:</h1>
      <div className="nyn-text">
        This is a sample paragraph with some <NLink>Link</NLink>.
      </div>
      <div className="nyn-text">
        This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
      </div>
    </div>
  );
};

export default LinkExample;
```

### Menu

```jsx
import { NMenu } from '../components/NMenu';
import { NMenuItem } from '../components/NMenuItem';
import { NDivider } from '../components/NDivider';
import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const MenuExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NMenu
        size={Size.MD}
        position="right"
        trigger={<NButton className="text-sm font-medium text-white bg-red-500 hover:bg-red-600">Open Menu</NButton>}>
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
    </div>
  );
};

export default MenuExample;
```

### Popover

```jsx
import { NPopover } from '../components/NPopover';
import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const PopoverExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Popover:</h1>
      <NPopover
        size={Size.MD}
        position="right"
        trigger={<NButton className="text-sm font-medium text-white bg-primary hover:bg-primary-dark">Open Popup</NButton>}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium nyn-text">Documentation</div>
          <div className="text-sm nyn-text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>
    </div>
  );
};

export default PopoverExample;
```

### Radio

```jsx
import { useState } from 'react';
import { NLink } from '../components/NLink';
import { NText } from '../components/NText';
import { Size } from '../components/Types';
import { NRadio } from '../components/NRadio';

const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState('LG');

  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Radio:</h1>
      <NRadio size={Size.XS} name="radio" value="XS" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.SM} name="radio" value="SM" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.MD} name="radio" value="MD" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.LG} name="radio" value="LG" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
    </div>
  );
};

export default RadioExample;
```

### Radio group

```jsx
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
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Radio Group Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Radio Group Vertical:</h1>
      <NRadioGroup isVertical={true} items={items} selected={selected1} setSelected={setSelected1} />
    </div>
  );
};

export default RadioGroupExample;
```

### Select

```jsx
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
    <div className="my-10">
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

```jsx
import { useState } from 'react';
import { NSwitch } from '../components/NSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="my-10 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Switch:</h1>
      <NSwitch enabled={enabled} setEnabled={setEnabled} />
    </div>
  );
};

export default SwitchExample;
```

### Tabs

```jsx
import { NTabs } from '../components/NTabs';
import { useState } from 'react';
import { NTabsContent } from '../components/NTabsContent';

const tabs = ['Posts', 'Saved'];

const TabsExample = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 py-2 nyn-text-muted">Content1</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content2</NTabsContent>
      </NTabs>
      <h1 className="nyn-text mb-3 mt-5 text-lg text-left">Tabs Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content3</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content4</NTabsContent>
      </NTabs>
    </div>
  );
};

export default TabsExample;
```

### Textarea

```jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NTextarea } from '../components/NTextarea';

const TextareaExample = () => {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState('Bangalore, India');

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Custom Textarea:</h1>
      <NTextarea label="Address" placeholder="Enter address" className="mb-3" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="nyn-text mb-3 mt-3 text-lg text-left">React Hook Form Textarea:</h1>
        <NTextarea rows={3} label="Address" placeholder="Enter address" className="mb-3" defaultValue="Bangalore, India" {...register('address')} />
      </form>
    </div>
  );
};

export default TextareaExample;
```

### Text

```jsx
import { NLink } from '../components/NLink';
import { NText } from '../components/NText';

const TextExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Text:</h1>
      <NText>This is a sample text.</NText>
      <NText className="text-base text-green-600">This is a sample text with custom styles.</NText>
    </div>
  );
};

export default TextExample;
```

For more info checkout example source code from [Github](https://github.com/ursnj/nayan/tree/main/src/examples) and run it in local.

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
