import { Tab } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  isFull?: boolean;
  tabs: string[];
  selected: number;
  setSelected?: any;
  children: ReactNode;
}

export const NJTabs = (props: Props) => {
  const { isFull = false, tabs, selected, children } = props;

  return (
    <Tab.Group selectedIndex={selected} onChange={props.setSelected}>
      <Tab.List className={`border-bottom${isFull ? ' grid grid-flow-col justify-stretch' : ''}`}>
        {tabs.map(tab => (
          <Tab as={Fragment} key={tab}>
            {({ selected }) => <button className={`px-3 py-2 ${selected ? 'tab-active' : 'tab-inactive'}`}>{tab}</button>}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>{children}</Tab.Panels>
    </Tab.Group>
  );
};
