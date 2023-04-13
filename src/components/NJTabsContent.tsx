import { Tab } from '@headlessui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const NJTabsContent = (props: Props) => {
  return <Tab.Panel className="text">{props.children}</Tab.Panel>;
};
