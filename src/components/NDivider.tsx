import React, { ReactNode, memo } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export interface NDividerProps extends React.ComponentProps<typeof Separator> {
  children?: ReactNode;
  childrenClassName?: string;
}

const NDividerComponent: React.FC<NDividerProps> = memo(
  ({ className = '', orientation = 'horizontal', children, childrenClassName = '', ...rest }) => {
    if (children && orientation === 'vertical') {
      return <Separator orientation={orientation} className={cn('bg-border', className)} {...rest} />;
    }
    if (children && orientation === 'horizontal') {
      return (
        <div className={cn('flex items-center', className)}>
          <Separator orientation="horizontal" className={cn('flex-1 h-px', className)} {...rest} />
          <span className={cn('mx-2 text-border text-xs whitespace-nowrap', childrenClassName)}>{children}</span>
          <Separator orientation="horizontal" className={cn('flex-1 h-px', className)} {...rest} />
        </div>
      );
    }
    return <Separator orientation={orientation} className={cn('bg-border', className)} {...rest} />;
  }
);

NDividerComponent.displayName = 'NDivider';

export const NDivider = NDividerComponent;
