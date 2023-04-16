import { Popover, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Size } from './Types';

interface Props {
  size?: Size;
  position?: 'left' | 'right';
  trigger: ReactNode;
  children: ReactNode;
}

const sizeMapping = {
  [Size.XS]: 'w-[150px]',
  [Size.SM]: 'w-[200px]',
  [Size.MD]: 'w-[250px]',
  [Size.LG]: 'w-[300px]'
};

export const NPopover = (props: Props) => {
  const { trigger, children, size = Size.SM, position = 'right' } = props;
  return (
    <Popover className="relative">
      <Popover.Button className="nyn-popover-trigger">{trigger}</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel
          className={`nyn-popover-content absolute ${position === 'right' ? 'right-0' : 'left-0'} z-10 mt-1 rounded ${
            sizeMapping[size]
          } -translate-x-0 transform nyn-background-card nyn-border shadow-lg`}>
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
