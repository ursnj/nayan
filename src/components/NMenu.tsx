import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';
import { Size } from './Types';

interface Props {
  size?: Size;
  title?: string;
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
  const { trigger, children, className = '', title = '', size = Size.MD } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`nyn-menu-trigger ${className}`}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`nyn-menu-content rounded nyn-background-card nyn-border shadow-lg ${menuSizeMapping[size]}`}>
        {title && (
          <>
            <DropdownMenuLabel>{title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
