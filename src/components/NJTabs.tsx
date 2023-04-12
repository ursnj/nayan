import { Tab } from '@headlessui/react';

interface Props {
  selected: number;
  setSelected?: any;
}

export const NJTabs = (props: Props) => {
  return (
    <Tab.Group selectedIndex={props.selected} onChange={props.setSelected}>
      <Tab.List>
        <Tab className="text ui-selected:border-bottom mr-2">Tab 1</Tab>
        <Tab className="text">Tab 2</Tab>
        <Tab className="text">Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="text">Content 1</Tab.Panel>
        <Tab.Panel className="text">Content 2</Tab.Panel>
        <Tab.Panel className="text">Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
