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
            <button className="text-primary" onClick={changeTheme}>
              Toggle Theme
            </button>
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3">
            <InputExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3">
            <SelectExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3">
            <ComboExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3">
            <DisClosureExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3">
            <RadioGroupExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3 text-right">
            <MenuExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3 text-right">
            <PopoverExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3 text-right">
            <DialogExample />
          </div>
          <NJDivider hasMargin={true} />
          <div className="mt-3 text-right">
            <SwitchExample />
          </div>
        </div>
      </div>
    </NJTheme>
  );
};

export default App;
