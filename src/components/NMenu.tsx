import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';
import { Size } from './Types';
import { NDivider } from '@/components/NDivider';

interface Props {
  size?: Size;
  title?: string;
  side?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  align?: 'start' | 'end' | 'center' | undefined;
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const menuSizeMapping = {
  [Size.XS]: 'w-[80px]',
  [Size.SM]: 'w-[100px]',
  [Size.MD]: 'w-[150px]',
  [Size.LG]: 'w-[200px]'
};

export const NMenu = (props: Props) => {
  const { trigger, children, className = '', title = '', size = Size.MD, side = 'bottom', align = 'end' } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`nyn-menu-trigger ${className}`}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        align={align}
        className={`nyn-menu-content rounded nyn-background-card nyn-border shadow-lg ${menuSizeMapping[size]}`}>
        {title && (
          <>
            <DropdownMenuLabel className="nyn-text">{title}</DropdownMenuLabel>
            <NDivider />
          </>
        )}
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
