import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';
import { MenuSize } from './Types';
import { NDivider } from '@/components/NDivider';
import { cn } from '@/lib/utils';

export const menuSizeMapping = {
  [MenuSize.XS]: 'w-[80px]',
  [MenuSize.SM]: 'w-[100px]',
  [MenuSize.MD]: 'w-[150px]',
  [MenuSize.LG]: 'w-[200px]'
};

interface Props {
  size?: MenuSize;
  title?: string;
  side?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
  className?: string;
  triggerClassName?: string;
  titleClassName?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const NMenu = (props: Props) => {
  const {
    trigger,
    children,
    className = '',
    triggerClassName = '',
    titleClassName = '',
    title = '',
    size = MenuSize.MD,
    side = 'bottom',
    align = 'end'
  } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(`nyn-menu-trigger ${triggerClassName}`)}>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        align={align}
        className={cn(`nyn-menu-content rounded bg-card border border-border shadow-lg ${menuSizeMapping[size]} ${className}`)}>
        {title && (
          <>
            <DropdownMenuLabel className={cn(`text-text ${titleClassName}`)}>{title}</DropdownMenuLabel>
            <NDivider />
          </>
        )}
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
