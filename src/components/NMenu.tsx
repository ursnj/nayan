import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export const NMenu = (props: Props) => {
  const { trigger, children, className = '' } = props;
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
        <Menu.Items className="nyn-menu-items absolute right-0 mt-1 z-10 w-[170px] origin-top-right rounded card-background border shadow-lg">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
