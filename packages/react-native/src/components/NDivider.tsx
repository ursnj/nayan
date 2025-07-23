import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface Props {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const NDivider = (props: Props) => {
  const { orientation = 'horizontal', className } = props;
  return <Separator className={cn(`bg-border`, className)} orientation={orientation as any} />;
};
