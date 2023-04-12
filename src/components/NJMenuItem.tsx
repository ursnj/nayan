import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const NJMenuItem = (props: Props) => {
  return <Menu.Item>{props.children}</Menu.Item>;
};
