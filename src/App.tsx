import { useState } from 'react';
import { NTheme } from './components/NTheme';
import MenuExample from './examples/MenuExample';
import DialogExample from './examples/DialogExample';
import SwitchExample from './examples/SwitchExample';
import AccordionExample from './examples/AccordionExample';
import PopoverExample from './examples/PopoverExample';
import RadioGroupExample from './examples/RadioGroupExample';
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
import TextareaExample from './examples/TextareaExample';
import DividerExample from './examples/DividerExample';
import ConfirmAlertExample from '@/examples/ConfirmAlertExample';
import ToastExample from '@/examples/ToastExample';
import TooltipExample from '@/examples/TooltipExample';
import SheetExample from '@/examples/SheetExample';
import SkeletonExample from '@/examples/SkeletonExample';
import SelectExample from '@/examples/SelectExample';
import ComboExample from '@/examples/ComboExample';
import InfiniteScrollExample from '@/examples/InfiniteScrollExample';
import ButtonGroupExample from '@/examples/ButtonGroupExample';
import LinkifyExample from '@/examples/LinkifyExample';
import ProgressExample from '@/examples/ProgressExample';
import SliderExample from '@/examples/SliderExample';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NTheme theme={theme}>
      <div className="pt-0">
        <div className="w-full">
          <div className="px-5 my-3 flex flex-row justify-between items-center">
            <img src={import.meta.env.DEV ? '/nayan.png' : '/nayan/nayan.png'} width="50" height="50" />
            <NText className="cursor-pointer text-primary" onClick={changeTheme}>
              Toggle Theme
            </NText>
          </div>
          <NDivider />
          <div className="p-5 columns-1 md:columns-2 lg:columns-3 gap-16">
            <AccordionExample />
            <AlertExample />
            <BadgeExample />
            <ButtonExample />
            <ButtonGroupExample />
            <CardExample />
            <CheckExample />
            <ComboExample />
            <ConfirmAlertExample />
            <DialogExample />
            <DividerExample />
            <TextExample />
            <LinkExample />
            <InputExample />
            <LinkifyExample />
            <MenuExample />
            <PopoverExample />
            <ProgressExample />
            <RadioGroupExample />
            <TextareaExample />
            <TabsExample />
            <ToastExample />
            <TooltipExample />
            <SelectExample />
            <SheetExample />
            <SliderExample />
            <SwitchExample />
            <SkeletonExample />
          </div>
          <div className="p-5">
            <NDivider />
            <InfiniteScrollExample />
          </div>
        </div>
      </div>
    </NTheme>
  );
};

export default App;
