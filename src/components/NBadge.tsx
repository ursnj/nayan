import { Badge } from '@/components/ui/badge';
import { BadgeSize } from './Types';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const sizeMapping = {
  [BadgeSize.XS]: 'px-2 py-0.5 text-xs',
  [BadgeSize.SM]: 'px-2 py-0 text-sm',
  [BadgeSize.MD]: 'px-3 py-0 text-base',
  [BadgeSize.LG]: 'px-3 py-0 text-lg'
};

interface Props {
  size: BadgeSize;
  children: string | ReactNode;
  className?: string;
}

export const NBadge = (props: Props) => {
  const { className = '', size = BadgeSize.SM, children } = props;

  return <Badge className={cn(`nyn-badge ${size.toLowerCase()} rounded-full font-normal ${sizeMapping[size]} ${className}`)}>{children}</Badge>;
};
