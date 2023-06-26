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
import AlertExample from './examples/AlertExample';
import BadgeExample from './examples/BadgeExample';
import ButtonExample from './examples/ButtonExample';
import CardExample from './examples/CardExample';
import LinkExample from './examples/LinkExample';
import TextExample from './examples/TextExample';
import CheckExample from './examples/CheckExample';
import RadioExample from './examples/RadioExample';
import TextareaExample from './examples/TextareaExample';
import DividerExample from './examples/DividerExample';
import InfiniteScrollExample from './examples/InfiniteScrollExample';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3 pt-0">
        <div className="max-w-6xl m-auto">
          <div className="my-3 flex flex-row justify-between items-center">
            <img src="/nayan/nayan.png" width="50" height="50" />
            <NText className="cursor-pointer nyn-text-primary" onClick={changeTheme}>
              Toggle Theme
            </NText>
          </div>
          <NDivider />
          <div className="mt-10 columns-1 md:columns-2 gap-16">
            <AlertExample />
            <BadgeExample />
            <ButtonExample />
            <CardExample />
            <DividerExample />
            <TextExample />
            <LinkExample />
            <DisClosureExample />
            <InputExample />
            <TextareaExample />
            <CheckExample />
            <RadioExample />
            <SelectExample />
            <ComboExample />
            <RadioGroupExample />
            <TabsExample />
            <DialogExample />
            <MenuExample />
            <PopoverExample />
            <SwitchExample />
          </div>
          <NDivider />
          <InfiniteScrollExample />
        </div>
      </div>
    </NTheme>
  );
};

export default App;
