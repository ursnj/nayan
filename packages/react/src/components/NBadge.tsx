import React, { ReactNode, memo } from 'react';
import { Badge } from './ui/badge';
import { BadgeSize } from './Types';
import { cn } from '../lib/utils';

const sizeMapping = {
  [BadgeSize.XS]: 'px-2 py-0.5 text-xs',
  [BadgeSize.SM]: 'px-2 py-0 text-sm',
  [BadgeSize.MD]: 'px-3 py-0 text-base',
  [BadgeSize.LG]: 'px-3 py-0 text-lg'
};

export interface NBadgeProps extends React.HTMLAttributes<HTMLElement> {
  size?: BadgeSize;
  children: ReactNode;
  className?: string;
  role?: string;
}

const NBadgeComponent: React.FC<NBadgeProps> = memo(({ className = '', size = BadgeSize.SM, children, role = 'status', ...rest }) => {
  return (
    <Badge
      role={role}
      aria-live={role === 'status' ? 'polite' : undefined}
      className={cn(`nyn-badge ${size.toLowerCase()} rounded-full font-normal ${sizeMapping[size]}`, className)}
      {...rest}>
      {children}
    </Badge>
  );
});

NBadgeComponent.displayName = 'NBadge';

export const NBadge = NBadgeComponent;
