import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ReactNode } from 'react';
import { PopoverSize } from './Types';
import { cn } from '@/lib/utils';

const sizeMapping = {
  [PopoverSize.XS]: 'w-[150px]',
  [PopoverSize.SM]: 'w-[200px]',
  [PopoverSize.MD]: 'w-[250px]',
  [PopoverSize.LG]: 'w-[300px]'
};

interface Props {
  size?: PopoverSize;
  className?: string;
  triggerClassName?: string;
  trigger: ReactNode;
  children: ReactNode;
  side?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
}

export const NPopover = (props: Props) => {
  const { trigger, children, size = PopoverSize.SM, className = '', triggerClassName = '', side = 'bottom', align = 'end' } = props;
  return (
    <Popover>
      <PopoverTrigger className={cn(`nyn-popover ${triggerClassName}`)}>{trigger}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        className={cn(`nyn-popover-content rounded bg-card border border-border shadow-lg p-0 ${sizeMapping[size]} ${className}`)}>
        {children}
      </PopoverContent>
    </Popover>
  );
};
