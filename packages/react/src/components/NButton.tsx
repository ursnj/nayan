import React, { ReactNode, memo } from 'react';
import { ButtonSize } from './Types';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const sizeMapping = {
  [ButtonSize.XS]: 'px-2 py-0.5 text-xs',
  [ButtonSize.SM]: 'px-2 py-1 text-sm',
  [ButtonSize.MD]: 'px-3 py-2 text-sm',
  [ButtonSize.LG]: 'px-3 py-2 text-base'
};

export interface NButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  className?: string;
  isOutline?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const NButtonComponent: React.FC<NButtonProps> = memo(
  ({
    children,
    size = ButtonSize.MD,
    className = '',
    isOutline = false,
    isLoading = false,
    loadingText = 'Loading...',
    leftIcon,
    rightIcon,
    disabled,
    type = 'button',
    ...remaining
  }) => {
    const isDisabled = isLoading || disabled;
    return (
      <Button
        type={type}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        className={cn(
          `nyn-button ${size.toLowerCase()} ${
            isOutline
              ? 'text-primary hover:text-white bg-transparent hover:bg-primary-dark border border-primary'
              : 'text-white bg-primary border border-primary hover:bg-primary-dark'
          } rounded h-auto transition duration-150 ease-in-out ${sizeMapping[size]}`,
          className
        )}
        {...remaining}>
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {!isLoading ? children : <span aria-live="polite">{loadingText}</span>}
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </Button>
    );
  }
);

NButtonComponent.displayName = 'NButton';

export const NButton = NButtonComponent;
