import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Size } from './Types';

interface Props {
  size?: Size;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

const sizeMapping = {
  [Size.XS]: 'w-[80px]',
  [Size.SM]: 'w-[100px]',
  [Size.MD]: 'w-[150px]',
  [Size.LG]: 'w-[200px]'
};

export const NMenu = (props: Props) => {
  const { trigger, children, className = '', size = Size.MD } = props;
  return (
    <Menu as="span" className="nyn-menu relative">
      <Menu.Button className={`nyn-menu-trigger ${className}`}>{trigger}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items
          className={`nyn-menu-items absolute right-0 mt-1 z-10 ${sizeMapping[size]} origin-top-right rounded nyn-background-card nyn-border shadow-lg`}>
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
