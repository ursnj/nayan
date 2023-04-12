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

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NJTheme theme={theme}>
      <div className="w-screen h-screen p-3">
        <div className="max-w-lg m-auto">
          <div className="mt-3">
            <button className="text-primary" onClick={changeTheme}>
              Toggle Theme
            </button>
          </div>
          <div className="mt-3">
            <SelectExample />
          </div>
          <div className="mt-3">
            <ComboExample />
          </div>
          <div className="mt-3">
            <DisClosureExample />
          </div>
          <div className="mt-3">
            <RadioGroupExample />
          </div>
          <div className="mt-3 text-right">
            <MenuExample />
          </div>
          <div className="mt-3 text-right">
            <PopoverExample />
          </div>
          <div className="mt-3 text-right">
            <DialogExample />
          </div>
          <div className="mt-3 text-right">
            <SwitchExample />
          </div>
        </div>
      </div>
    </NJTheme>
  );
};

export default App;
