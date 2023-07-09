<div align="center">
    <img width="200" src="https://github.com/ursnj/nayan/blob/main/public/nayan.png?raw=true">
</div>
<h1 align="center">Nayan UI</h1>

<div align="center">

Nayan UI provides React component library based on Tailwind CSS and @shadcn/ui. This library is a collection of pre-designed and pre-built React components that can be used to quickly and easily build beautiful and functional and fully accessible user interfaces for your web application.

[![NPM version][npm-image]][npm-url] [![Follow Twitter][twitter-image]][twitter-url] [![Follow Linked In][linkedin-image]][linkedin-url]

[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: http://npmjs.org/package/nayan
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/ursNjn
[linkedin-image]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/ursNj

</div>

## 🖥 Demo

Checkout demo for all the components Nayan UI exposing [Checkout](https://ursnj.github.io/nayan/)

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
@import './node_modules/nayan/dist/style.css';

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
}
```

## 🕹 Usage

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

### Accordian

```jsx
import { NAccordion } from '@/components/NAccordion';

const AccordionExample = () => {
  const list = [
    { title: 'Heading 1', message: 'Description 1' },
    { title: 'Heading 2', message: 'Description 2' }
  ];
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Accordion Single:</h1>
      <NAccordion list={list} />
      <h1 className="nyn-text mb-3 mt-5 text-lg">Accordion Multiple:</h1>
      <NAccordion type="multiple" list={list} />
    </div>
  );
};

export default AccordionExample;
```

### Alert

```jsx
import { AlertTypes, NAlert } from '@/components/NAlert';

const AlertExample = () => {
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Alert:</h1>
            <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
            <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
            <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
            <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
            <NAlert type={AlertTypes.ERROR} title="Error!" message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
        </div>
    );
};

export default AlertExample;
```

### Badge

```jsx
import { NBadge } from '@/components/NBadge';
import { Size } from '@/components/Types';

const BadgeExample = () => {
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Badge:</h1>
            <NBadge size={Size.XS} name="Sample" className="nyn-text nyn-background-card nyn-border mr-2" />
            <NBadge size={Size.XS} name="Sample" className="text-blue-700 bg-blue-300 mr-2" />
            <NBadge size={Size.SM} name="Sample" className="text-green-700 bg-green-300 mr-2" />
            <NBadge size={Size.MD} name="Sample" className="text-yellow-700 bg-yellow-300 mr-2" />
            <NBadge size={Size.LG} name="Sample" className="text-red-700 bg-red-300 mr-2" />
        </div>
    );
};

export default BadgeExample;
```

### Button

```jsx
import { NButton } from '@/components/NButton';
import { Size } from '@/components/Types';

const ButtonExample = () => {
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Buttons:</h1>
            <NButton size={Size.XS} className="nyn-text nyn-background-card nyn-border mr-2">
                Button
            </NButton>
            <NButton
                type="submit"
                size={Size.XS}
                onClick={() => console.log('Button clicked')}
                className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
                Button
            </NButton>
            <NButton
                type="reset"
                size={Size.SM}
                onClick={() => console.log('Button clicked')}
                className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
                Button
            </NButton>
            <NButton
                size={Size.MD}
                isLoading={true}
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
                size={Size.LG}
                onClick={() => console.log('Button clicked')}
                className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 rounded-full mr-2">
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
import { useState } from 'react';
import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import { NText } from '@/components/NText';

const CheckExample = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Checkbox:</h1>
            <NCheck className="" isChecked={isChecked} onChange={(checked: any) => setIsChecked(checked)}>
                <NText className="inline">
                    Sample label for checkbox. accept <NLink> terms</NLink>
                </NText>
            </NCheck>
        </div>
    );
};

export default CheckExample;
```

### Combo box

```jsx
import { NCombo } from '@/components/NCombo';
import { useState } from 'react';

const items = [
    { value: 'startup', label: 'Startup' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
];

const ComboExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(items[0].value);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Combo Box:</h1>
            <NCombo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selected={selected}
                placeholder="Select Business"
                label="Business Type"
                items={items}
                onChange={setSelected}
            />
        </div>
    );
};

export default ComboExample;
```

### Confirm Alert

```jsx
import { NConfirmAlert } from '@/components/NConfirmAlert';

const ConfirmAlertExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Confirm Alert:</h1>
      <NConfirmAlert
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        trigger={<div className="text-sm font-medium text-pink-600">Show Alert</div>}
        onConfirmClick={() => console.log('Confirm Clicked')}
        onCancelClick={() => console.log('Cancel clicked')}
      />
    </div>
  );
};

export default ConfirmAlertExample;
```

### Dialog

```jsx
import { NDialog } from '@/components/NDialog';
import { Size } from '@/components/Types';

const DialogExample = () => {
    return (
        <div className="break-inside-avoid mb-16 flex flex-row justify-between">
            <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
            <NDialog size={Size.MD} title="Payment confirmation" trigger={<div className="text-sm font-medium text-green-600">Show Dialog</div>}>
                <div className="w-full h-full p-3 nyn-text">
                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                </div>
            </NDialog>
        </div>
    );
};

export default DialogExample;
```

### Divider

```jsx
import { NDivider } from '@/components/NDivider';

const DividerExample = () => {
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Divider Horizontal:</h1>
            <NDivider className="my-3" />
            <h1 className="nyn-text mb-3 text-lg">Divider Vertical:</h1>
            <NDivider orientation="vertical" className="h-5" />
        </div>
    );
};

export default DividerExample;
```

### Infinite Scroll

```jsx
import { NInfiniteScroll } from '../components/NInfiniteScroll';
import { NCard } from '../components/NCard';

const InfiniteScrollExample = () => {
  const items = new Array(5).fill(1);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg mt-5">Infinite Scroll</h1>
      <NInfiniteScroll
        next={() => console.log('Get Next Data')}
        hasMore={true}
        loader={<div className="nyn-text">Loading...</div>}
        dataLength={items.length}
        scrollThreshold={0.99}>
        {items.map((_, index) => (
          <NCard className="mb-3 p-5 nyn-text" key={index}>
            {index}
          </NCard>
        ))}
      </NInfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;
```

### Input

```jsx
import { NInput } from '@/components/NInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputExample = () => {
    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState('niranjan.devasani@gmail.com');

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Input:</h1>
            <NInput id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="nyn-text mb-3 mt-3 text-lg text-left">Input with React Hook Form:</h1>
                <NInput
                    id="in2"
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
        <div className="break-inside-avoid mb-16">
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
import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { Size } from '@/components/Types';
import { User } from 'lucide-react';
import { NMenuNested } from '@/components/NMenuNested';

const MenuExample = () => {
    return (
        <div className="break-inside-avoid mb-16 flex flex-row justify-between">
            <h1 className="nyn-text text-lg text-left">Dropdown Menu:</h1>
            <NMenu title="My Account" size={Size.LG} trigger={<div className="text-sm font-medium text-red-600">Show Menu</div>}>
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" separator={true} />
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
                <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
                    <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
                    <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
                </NMenuNested>
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" separator={true} />
                <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
            </NMenu>
        </div>
    );
};

export default MenuExample;
```

### Popover

```jsx
import { NPopover } from '@/components/NPopover';
import { Size } from '@/components/Types';

const PopoverExample = () => {
    return (
        <div className="break-inside-avoid mb-16 flex flex-row justify-between">
            <h1 className="nyn-text text-lg text-left">Popover:</h1>
            <NPopover size={Size.MD} trigger={<div className="text-sm font-medium nyn-text-primary">Show Popover</div>}>
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

### Radio Group

```jsx
import { useState } from 'react';
import { NRadioGroup } from '../components/NRadioGroup';

const items = [
    { value: 'startup', label: 'Startup' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroupExample = () => {
    const [selected, setSelected] = useState(items[0].value);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Radio Group Horizontal:</h1>
            <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
            <div className="mt-3" />
            <h1 className="nyn-text mb-3 text-lg">Radio Group Vertical:</h1>
            <NRadioGroup orientation="vertical" items={items} selected={selected} setSelected={setSelected} />
        </div>
    );
};

export default RadioGroupExample;
```

### Select

```jsx
import { useState } from 'react';
import { NSelect } from '@/components/NSelect';

const items = [
    { value: 'startup', label: 'Startup' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
];

const SelectExample = () => {
    const [selected, setSelected] = useState(items[0].value);
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Select:</h1>
            <NSelect selected={selected} placeholder="Select Business" label="Business Type" title="Select Type" items={items} onChange={setSelected} />
        </div>
    );
};

export default SelectExample;
```

### Sheet

```jsx
import { NSheet } from '@/components/NSheet';
import { Size } from '@/components/Types';

const SheetExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Sheet:</h1>
      <NSheet size={Size.SM} title="Edit Profile" trigger={<div className="text-sm font-medium text-green-600">Show Sheet</div>}>
        <div className="w-full h-full p-3">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NSheet>
    </div>
  );
};

export default SheetExample;
```

### Skeleton

```jsx
import { NSkeleton } from '@/components/NSkeleton';

const SkeletonExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Skeleton:</h1>
      <div className="flex items-center space-x-4">
        <NSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <NSkeleton className="h-4 w-[250px]" />
          <NSkeleton className="h-4 w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample;
```

### Switch

```jsx
import { useState } from 'react';
import { NSwitch } from '@/components/NSwitch';

const SwitchExample = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="break-inside-avoid mb-16 flex flex-row justify-between">
            <h1 className="nyn-text mb-3 text-lg text-left">Switch:</h1>
            <NSwitch enabled={enabled} onChange={setEnabled} />
        </div>
    );
};

export default SwitchExample;
```

### Tabs

```jsx
import { useState } from 'react';
import { NTabs } from '@/components/NTabs';
import { NTabsContent } from '@/components/NTabsContent';

const tabs = ['POSTS', 'SAVED'];

const TabsExample = () => {
    const [selected, setSelected] = useState(tabs[0]);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Tabs:</h1>
            <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
                <NTabsContent tab={tabs[0]} className="px-3 py-2 nyn-text">
                    Content1
                </NTabsContent>
                <NTabsContent tab={tabs[1]} className="px-3 py-2 nyn-text">
                    Content2
                </NTabsContent>
            </NTabs>
            <h1 className="nyn-text mb-3 mt-5 text-lg text-left">Tabs Full Width:</h1>
            <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
                <NTabsContent tab={tabs[0]} className="px-3 py-2 nyn-text">
                    Content3
                </NTabsContent>
                <NTabsContent tab={tabs[1]} className="px-3 py-2 nyn-text">
                    Content4
                </NTabsContent>
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
import { NTextarea } from '@/components/NTextarea';

const TextareaExample = () => {
    const { register, handleSubmit } = useForm();
    const [address, setAddress] = useState('Bangalore, India');

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg text-left">Custom Textarea:</h1>
            <NTextarea
                id="ta1"
                label="Address"
                placeholder="Enter address"
                className="mb-3"
                rows={3}
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="nyn-text mb-3 mt-3 text-lg text-left">React Hook Form Textarea:</h1>
                <NTextarea
                    id="ta2"
                    rows={3}
                    label="Address"
                    placeholder="Enter address"
                    className="mb-3"
                    defaultValue="Bangalore, India"
                    {...register('address')}
                />
            </form>
        </div>
    );
};

export default TextareaExample;
```

### Text

```jsx
import { NText } from '@/components/NText';

const TextExample = () => {
    return (
        <div className="break-inside-avoid mb-16">
            <h1 className="nyn-text mb-3 text-lg">Text:</h1>
            <NText>This is a sample text.</NText>
            <NText className="text-base text-green-600">This is a sample text with custom styles.</NText>
        </div>
    );
};

export default TextExample;
```

### Toast

```jsx
import { useToast } from '@/components/NToast';

const ToastExample = () => {
  const toast = useToast();
  return (
    <div className="mb-16 ">
      <div className="break-inside-avoid mb-5 flex flex-row justify-between">
        <h1 className="nyn-text mb-3 text-lg text-left">Toast:</h1>
        <div className="text-sm font-medium text-cyan-600" onClick={() => toast('Simple Toaster!')}>
          Show Toast
        </div>
      </div>
      <div className="break-inside-avoid flex flex-row justify-between">
        <h1 className="nyn-text mb-3 text-lg text-left">Toast with Title:</h1>
        <div className="text-sm font-medium text-yellow-600" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
          Show Toast
        </div>
      </div>
    </div>
  );
};

export default ToastExample;
```

### Tooltip

```jsx
import { NTooltip } from '@/components/NTooltip';

const TooltipExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Tooltip:</h1>
      <NTooltip message="This is sample tool tip! This is sample tool tip This is sample tool tip This is sample tool tip ">
        <div className="text-sm font-medium text-orange-600">Show Tooltip</div>
      </NTooltip>
    </div>
  );
};

export default TooltipExample;
```

For more info checkout example source code from [Github](https://github.com/ursnj/nayan/tree/main/src/examples) and run it in local.

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
