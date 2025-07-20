import React, { ReactNode, ReactElement, HTMLAttributes, forwardRef } from 'react';
import { DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from './ui/dropdown-menu';
import { Size } from './Types';
import { menuSizeMapping } from './NMenu';
import { cn } from '../lib/utils';

export interface NMenuNestedProps {
  size?: Size;
  className?: string;
  triggerClassName?: string;
  trigger: ReactElement;
  children: ReactNode;
  'aria-label'?: string;
}

export const NMenuNested: React.FC<NMenuNestedProps> = React.memo(
  ({ trigger, children, className = '', triggerClassName = '', size = Size.MD, 'aria-label': ariaLabel }) => {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger
          aria-haspopup="menu"
          aria-label={ariaLabel}
          className={cn('nyn-menu-nested-trigger text-muted hover:bg-border focus:bg-border active:bg-border py-2.5', triggerClassName)}>
          {trigger}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent
            role="menu"
            className={cn('nyn-menu-nested-content rounded bg-card border border-border shadow-lg', menuSizeMapping[size], className)}>
            {children}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }
);
NMenuNested.displayName = 'NMenuNested';
