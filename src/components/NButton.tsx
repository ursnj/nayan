import React, { ReactNode } from 'react';
import { ButtonSize } from './Types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sizeMapping = {
  [ButtonSize.XS]: 'px-2 py-0.5 text-xs',
  [ButtonSize.SM]: 'px-2 py-1 text-sm',
  [ButtonSize.MD]: 'px-3 py-2 text-sm',
  [ButtonSize.LG]: 'px-3 py-2 text-base'
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  className?: string;
  isOutline?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: (e: any) => void;
  children: string | ReactNode;
}

export const NButton = (props: Props) => {
  const {
    children,
    size = ButtonSize.MD,
    className = '',
    isOutline = false,
    isLoading = false,
    loadingText = 'Loading...',
    onClick = () => undefined,
    ...remaining
  } = props;

  return (
    <Button
      className={cn(
        `nyn-button ${size.toLowerCase()} ${
          isOutline
            ? 'text-primary hover:text-white bg-transparent hover:bg-primary-dark border border-primary'
            : 'text-white bg-primary border border-primary hover:bg-primary-dark'
        } rounded h-auto transition duration-150 ease-in-out ${sizeMapping[size]} ${className}`
      )}
      onClick={onClick}
      {...remaining}>
      {!isLoading ? children : loadingText}
    </Button>
  );
};
