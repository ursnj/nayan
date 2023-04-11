import MenuExample from './examples/MenuExample';
import SelectExample from './examples/SelectExample';
import DialogExample from './examples/DialogExample';
import SwitchExample from './examples/SwitchExample';
import DisClosureExample from './examples/DisClosureExample';
import PopoverExample from './examples/PopoverExample';
import { useEffect } from 'react';
import RadioGroupExample from './examples/RadioGroupExample';
import ComboExample from './examples/ComboExample';

const App = () => {
  const theme = localStorage.getItem('THEME');

  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const finalTheme = !theme || !defaultDark ? 'light' : theme || 'dark';
    document.documentElement.setAttribute('data-theme', finalTheme);
  }, []);

  return (
    <div className="w-screen h-screen p-3">
      <div className="max-w-lg m-auto">
        <div className="mt-3">
          <button className="text-primary" onClick={() => localStorage.setItem('THEME', theme === 'light' ? 'dark' : 'light')}>
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
  );
};

export default App;
