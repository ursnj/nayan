import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface Props {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const NPopover = (props: Props) => {
  const { trigger, children, className = '' } = props;
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent side={Platform.OS === 'web' ? 'bottom' : 'top'} insets={contentInsets} className={cn('w-80 bg-card p-0 shadow-sm', className)}>
        {children}
      </PopoverContent>
    </Popover>
  );
};
