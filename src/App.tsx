import { useState } from 'react';
import { NJTheme } from './components/NJTheme';
import MenuExample from './examples/MenuExample';
import SelectExample from './examples/SelectExample';
import DialogExample from './examples/DialogExample';
import SwitchExample from './examples/SwitchExample';
import DisClosureExample from './examples/DisClosureExample';
import PopoverExample from './examples/PopoverExample';
import RadioGroupExample from './examples/RadioGroupExample';
import ComboExample from './examples/ComboExample';
import { NJDivider } from './components/NJDivider';
import InputExample from './examples/InputExample';
import { NJText } from './components/NJText';
import TabsExample from './examples/TabsExample';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NJTheme theme={theme}>
      <div className="p-3">
        <div className="max-w-lg m-auto">
          <div className="mt-3">
            <NJText className="cursor-pointer text-primary" text="Toggle Theme" onClick={changeTheme} />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <InputExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <SelectExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <ComboExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <DisClosureExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <RadioGroupExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3">
            <TabsExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3 text-right">
            <MenuExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3 text-right">
            <PopoverExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3 text-right">
            <DialogExample />
          </div>
          <NJDivider className="my-5" />
          <div className="mt-3 text-right">
            <SwitchExample />
          </div>
        </div>
      </div>
    </NJTheme>
  );
};

export default App;
