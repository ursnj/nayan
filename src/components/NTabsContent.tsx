import { Tab } from '@headlessui/react';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const NTabsContent = (props: Props) => {
  const { className = '' } = props;
  return <Tab.Panel className={`njn-tab-content ${className}`}>{props.children}</Tab.Panel>;
};
