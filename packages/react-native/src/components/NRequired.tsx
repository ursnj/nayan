import React from 'react';
import { cn } from '@/lib/utils';
import { NText } from '@/components/NText';

interface Props {
  className?: string;
}

export const NRequired = (props: Props) => {
  const { className = '' } = props;
  return <NText className={cn('text-red-500', className)}>*</NText>;
};
