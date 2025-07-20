import React, { ReactNode, ReactElement, forwardRef, useId, memo } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PopoverSize } from './Types';
import { cn } from '@/lib/utils';

const sizeMapping = {
  [PopoverSize.XS]: 'w-[150px]',
  [PopoverSize.SM]: 'w-[200px]',
  [PopoverSize.MD]: 'w-[250px]',
  [PopoverSize.LG]: 'w-[300px]'
};

export interface NPopoverProps {
  size?: PopoverSize;
  className?: string;
  triggerClassName?: string;
  trigger: ReactElement;
  children: ReactNode;
  side?: 'top' | 'bottom' | 'right' | 'left';
  align?: 'start' | 'end' | 'center';
  popoverId?: string;
  popoverLabel?: string;
  triggerProps?: React.HTMLAttributes<HTMLElement>;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const NPopover = memo(
  forwardRef<HTMLDivElement, NPopoverProps>((props, ref) => {
    const {
      trigger,
      children,
      size = PopoverSize.SM,
      className = '',
      triggerClassName = '',
      side = 'bottom',
      align = 'end',
      popoverId,
      popoverLabel,
      triggerProps = {},
      contentProps = {}
    } = props;
    const id = popoverId || useId();
    // Accessibility: aria-controls, aria-haspopup, aria-label
    const triggerNode = React.cloneElement(trigger, {
      id,
      'aria-controls': id,
      'aria-haspopup': 'dialog',
      ...triggerProps,
      className: cn('nyn-popover', triggerClassName, triggerProps.className, trigger.props.className)
    });
    return (
      <Popover>
        <PopoverTrigger>{triggerNode}</PopoverTrigger>
        <PopoverContent
          ref={ref}
          id={id}
          role="dialog"
          aria-modal="false"
          aria-label={popoverLabel}
          side={side}
          align={align}
          className={cn(
            'nyn-popover-content rounded bg-card border border-border shadow-lg p-0',
            sizeMapping[size],
            className,
            contentProps.className
          )}
          {...contentProps}>
          {children}
        </PopoverContent>
      </Popover>
    );
  })
);
NPopover.displayName = 'NPopover';
