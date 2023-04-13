import { useState } from 'react';
import { NTheme } from './components/NTheme';
import MenuExample from './examples/MenuExample';
import SelectExample from './examples/SelectExample';
import DialogExample from './examples/DialogExample';
import SwitchExample from './examples/SwitchExample';
import DisClosureExample from './examples/DisClosureExample';
import PopoverExample from './examples/PopoverExample';
import RadioGroupExample from './examples/RadioGroupExample';
import ComboExample from './examples/ComboExample';
import { NDivider } from './components/NDivider';
import InputExample from './examples/InputExample';
import { NText } from './components/NText';
import TabsExample from './examples/TabsExample';
import { NCard } from './components/NCard';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3">
        <div className="max-w-lg m-auto">
          <div className="mt-3">
            <NText className="cursor-pointer text-primary" text="Toggle Theme" onClick={changeTheme} />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <InputExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <SelectExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <ComboExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <DisClosureExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <RadioGroupExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3">
            <TabsExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3 text-right">
            <MenuExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3 text-right">
            <PopoverExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3 text-right">
            <DialogExample />
          </div>
          <NDivider className="my-5" />
          <div className="mt-3 text-right">
            <SwitchExample />
          </div>
          <NDivider className="my-5" />
          <h1 className="text mb-3 text-lg text-left">Card:</h1>
          <NCard>
            <div className="text p-2">Sample card</div>
          </NCard>
        </div>
      </div>
    </NTheme>
  );
};

export default App;
