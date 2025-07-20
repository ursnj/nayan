import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { MenuSize } from './Types';
import { NDivider } from '@/components/NDivider';
import { cn } from '@/lib/utils';

export const menuSizeMapping = {
  [MenuSize.XS]: 'w-[80px]',
  [MenuSize.SM]: 'w-[100px]',
  [MenuSize.MD]: 'w-[150px]',
  [MenuSize.LG]: 'w-[200px]'
} as const;

export interface NMenuProps {
  size?: MenuSize;
  title?: ReactNode;
  side?: 'top' | 'bottom' | 'right' | 'left';
  align?: 'start' | 'end' | 'center';
  className?: string;
  triggerClassName?: string;
  titleClassName?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const NMenu: React.FC<NMenuProps> = React.memo(
  ({
    trigger,
    children,
    className = '',
    triggerClassName = '',
    titleClassName = '',
    title = '',
    size = MenuSize.MD,
    side = 'bottom',
    align = 'end'
  }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={cn('nyn-menu-trigger', triggerClassName)} aria-haspopup="menu">
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={side}
          align={align}
          className={cn('nyn-menu-content rounded bg-card border border-border shadow-lg', menuSizeMapping[size], className)}
          role="menu">
          {title && (
            <>
              <DropdownMenuLabel className={cn('text-text', titleClassName)}>{title}</DropdownMenuLabel>
              <NDivider />
            </>
          )}
          <DropdownMenuGroup>{children}</DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

NMenu.displayName = 'NMenu';
