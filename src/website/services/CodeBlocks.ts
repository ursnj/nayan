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

export const accordionCode = `import { NAccordion, AccordionTypes } from 'nayan';

const Accordion = () => {
  const list = [
    { title: 'Heading 1', message: 'Description 1' },
    { title: 'Heading 2', message: 'Description 2' }
  ];

  return (
    <div>
      <h1 className="text-text mb-3 text-lg">Single:</h1>
      <NAccordion type={AccordionTypes.SINGLE} list={list} />
      <h1 className="text-text mb-3 mt-5 text-lg">Multiple:</h1>
      <NAccordion type={AccordionTypes.MULTIPLE} list={list} />
    </div>
  );
};

export default Accordion;`;

export const alertCode = `import { NAlert, AlertTypes } from 'nayan';

const Alert = () => {
  return (
    <div>
      <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.ERROR} title="Error!" message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
    </div>
  );
};

export default Alert;`;

export const badgeCode = `import { NBadge, Size } from 'nayan';

const Badge = () => {
  return (
    <div>
      <NBadge size={Size.XS} name="Sample" className="text-text bg-card border border-border mr-2" />
      <NBadge size={Size.XS} name="Sample" className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={Size.SM} name="Sample" className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={Size.MD} name="Sample" className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={Size.LG} name="Sample" className="text-red-700 bg-red-300 mr-2" />
    </div>
  );
};

export default Badge;`;

export const buttonCode = `import { NButton, Size } from 'nayan';

const Button = () => {
  return (
    <div>
      <NButton size={Size.XS} isDisabled className="text-text bg-card border border-border mr-2">
        Button
      </NButton>
      <NButton type="submit" size={Size.XS} onClick={() => console.log('Button clicked')} className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
        Button
      </NButton>
      <NButton type="reset" size={Size.SM} onClick={() => console.log('Button clicked')} className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
        Button
      </NButton>
      <NButton size={Size.MD} isLoading={true} onClick={() => console.log('Button clicked')} className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} isOutline={true} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} onClick={() => console.log('Button clicked')} className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 rounded-full mr-2">
        Button
      </NButton>
    </div>
  );
};

export default Button`;

export const buttonGroupCode = `import { useState } from 'react';
import { NButtonGroup } from 'nayan';

const items = ['Startup', 'Business', 'Enterprise'];

const ButtonGroup = () => {
  const [selected, setSelected] = useState(items[0]);
  return <NButtonGroup items={items} selected={selected} setSelected={setSelected} />;
};

export default ButtonGroup;`;

export const cardCode = `import { NCard } from 'nayan';

const Card = () => {
  return <NCard className="p-3">This is sample card.</NCard>
};

export default Card;`;

export const checkBoxCode = `import { useState } from 'react';
import { NCheck, NLink } from 'nayan';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <NCheck isChecked={isChecked} onChange={checked => setIsChecked(checked)}>
      Sample label for checkbox. accept <NLink> terms</NLink>
    </NCheck>
  );
};

export default Checkbox;`;

export const comboBoxCode = `import { NCombo } from 'nayan';
import { useState } from 'react';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Combobox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0].value);

  return (
    <NCombo
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selected={selected}
      placeholder="Select Business"
      label="Business Type"
      items={items}
      onChange={setSelected}
    />
  );
};

export default Combobox;`;

export const confirmAlertCode = `import { useState } from 'react';
import { NConfirmAlert, NButton } from 'nayan';

const ConfirmAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NConfirmAlert
        isOpen={isOpen}
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onResult={result => console.log('Alert Clicked', result)}
        onClose={() => setIsOpen(false)}
      />
      <NButton onClick={() => setIsOpen(true)}>Show Alert</NButton>
    </div>
  );
};

export default ConfirmAlert;`;

export const dialogCode = `import { useState } from 'react';
import { NDialog, Size } from 'nayan';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NDialog isOpen={isOpen} closeModal={() => setIsOpen(false)} size={Size.MD} title="Payment confirmation">
        Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
      </NDialog>
      <NButton onClick={() => setIsOpen(true)}>Show Dialog</NButton>
    </div>
  );
};

export default Dialog;`;

export const dividerCode = `import { NDivider } from 'nayan';

const Divider = () => {
  return (
    <div>
      <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
      <NDivider className="my-3" />
      <h1 className="text-text mb-3 text-lg">Vertical:</h1>
      <NDivider orientation="vertical" className="h-5" />
    </div>
  );
};

export default Divider;`;

export const inputCode = `import { NInput } from 'nayan';
import { useState } from 'react';

const Input = () => {
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  return (
    <NInput id="email" type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
  );
};

export default Input;`;

export const linkCode = `import { NLink } from 'nayan';

const Link = () => {
  return (
    <div>
      <div className="text-text">
        This is a sample paragraph with some <NLink>Link</NLink>.
      </div>
      <div className="text-text">
        This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
      </div>
    </div>
  );
};

export default Link;`;

export const linkifyCode = `import { NLinkify } from 'nayan';

const Linkify = () => {
  return (
    <NLinkify>Checkout our new landing page at nayanui.com and new email hello@nayanui.com</NLinkify>
  );
};

export default Linkify;`;

export const menuCode = `import { NMenu,NMenuItem, Size, NMenuNested, NButton } from 'nayan';
import { User } from 'lucide-react';

const Menu = () => {
  return (
    <NMenu align="start" title="My Account" size={Size.LG} trigger={<NButton>Show Menu</NButton>}>
      <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
      <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
        <NMenuItem title="Facebook" icon={User} shortcut="⌘P" />
        <NMenuItem title="Twitter" icon={User} shortcut="⌘P" />
      </NMenuNested>
      <NMenuItem title="Settings" icon={User} shortcut="⌘P" separator={true} />
      <NMenuItem title="Logout" icon={User} shortcut="⌘P" />
    </NMenu>
  );
};

export default Menu;`;

export const popoverCode = `import { NPopover, NButton, Size } from 'nayan';

const Popover = () => {
  return (
    <NPopover size={Size.MD} trigger={<NButton>Show Popover</NButton>}>
      <div className="overflow-hidden p-3">
        <div className="text-sm font-medium text-text">Documentation</div>
        <div className="text-sm text-muted">Start integrating products and tools</div>
      </div>
    </NPopover>
  );
};

export default Popover;`;

export const progressCode = `import { NProgress } from 'nayan';

const Progress = () => {
  return <NProgress value={50} />;
};

export default Progress;`;

export const radioGroupCode = `import { useState } from 'react';
import { NRadioGroup } from 'nayan';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroupExample = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <div>
      <h1 className="text-text mb-3 text-base">Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-5" />
      <h1 className="text-text mb-3 text-base">Vertical:</h1>
      <NRadioGroup orientation="vertical" items={items} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default RadioGroup;`;

export const selectCode = `import { useState } from 'react';
import { NSelect } from 'nayan';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Select = () => {
  const [selected, setSelected] = useState(items[0].value);
  return (
    <NSelect selected={selected} placeholder="Select Business" label="Business Type" title="Select Type" items={items} onChange={setSelected} />
  );
};

export default Select;`;

export const sheetCode = `import { useState } from 'react';
import { NSheet, NButton, Size } from 'nayan';

const SheetExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NButton onClick={() => setIsOpen(true)}>Show Sheet</NButton>
      <NSheet isOpen={isOpen} size={Size.SM} title="Edit Profile" onCloseSheet={() => setIsOpen(false)}>
        <div className="w-full h-full p-3">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </div>
      </NSheet>
    </div>
  );
};

export default Sheet;`;

export const skeletonCode = `import { NSkeleton } from 'nayan';

const Skeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <NSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <NSkeleton className="h-4 w-[250px]" />
        <NSkeleton className="h-4 w-[180px]" />
      </div>
    </div>
  );
};

export default Skeleton;`;

export const sliderCode = `import { NSlider } from 'nayan';

const Slider = () => {
  return (
    <NSlider defaultValue={50} max={100} step={1} isDisabled={false} onChange={value => console.log(value)} />
  );
};

export default Slider;`;

export const switchCode = `import { useState } from 'react';
import { NSwitch } from 'nayan';

const Switch = () => {
  const [enabled, setEnabled] = useState(false);
  return <NSwitch enabled={enabled} onChange={setEnabled} />;
};

export default Switch;`;

export const tabsCode = `import { useState } from 'react';
import { NTabs, NTabsContent } from 'nayan';

const tabs = ['POSTS', 'SAVED'];

const Tabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div>
      <h1 className="text-text mb-3 text-lg text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content 1
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content 2
        </NTabsContent>
      </NTabs>
      <h1 className="text-text mb-3 mt-5 text-lg text-left">Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content 3
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content 4
        </NTabsContent>
      </NTabs>
    </div>
  );
};

export default Tabs;`;

export const textareaCode = `import { useState } from 'react';
import { NTextarea } from 'nayan';

const Textarea = () => {
  const [address, setAddress] = useState('Bangalore, India');

  return (
    <NTextarea
      id="ta1"
      label="Address"
      placeholder="Enter address"
      className="mb-3"
      rows={3}
      value={address}
      onChange={e => setAddress(e.target.value)}
    />
  );
};

export default Textarea;`;
