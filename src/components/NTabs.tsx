import { Tab } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  isFull?: boolean;
  tabs: string[];
  selected: number;
  setSelected?: any;
  children: ReactNode;
}

export const NTabs = (props: Props) => {
  const { isFull = false, tabs, selected, children } = props;

  return (
    <Tab.Group selectedIndex={selected} onChange={props.setSelected}>
      <Tab.List className={`njn-tabs border-bottom${isFull ? ' grid grid-flow-col justify-stretch' : ''}`}>
        {tabs.map(tab => (
          <Tab as={Fragment} key={tab}>
            {({ selected }) => <button className={`njn-tab px-3 py-2 ${selected ? 'tab-active' : 'tab-inactive'}`}>{tab}</button>}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="njn-tabs-content">{children}</Tab.Panels>
    </Tab.Group>
  );
};
