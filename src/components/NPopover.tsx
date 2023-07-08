import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ReactNode } from 'react';
import { Size } from './Types';

const sizeMapping = {
  [Size.XS]: 'w-[150px]',
  [Size.SM]: 'w-[200px]',
  [Size.MD]: 'w-[250px]',
  [Size.LG]: 'w-[300px]'
};

interface Props {
  size?: Size;
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const NPopover = (props: Props) => {
  const { trigger, children, size = Size.SM, className = '' } = props;
  return (
    <Popover>
      <PopoverTrigger className={`nyn-popover ${className}`}>{trigger}</PopoverTrigger>
      <PopoverContent className={`nyn-popover-content rounded nyn-background-card nyn-border shadow-lg p-0 ${sizeMapping[size]}`}>
        {children}
      </PopoverContent>
    </Popover>
  );
};
