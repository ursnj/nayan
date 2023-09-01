import { ReactNode } from 'react';
import { Size } from './Types';
import { Button } from '@/components/ui/button';

const sizeMapping = {
  [Size.XS]: 'px-2 py-0.5 text-xs',
  [Size.SM]: 'px-2 py-1 text-sm',
  [Size.MD]: 'px-3 py-2 text-sm',
  [Size.LG]: 'px-3 py-2 text-base'
};

interface Props {
  size?: Size;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  isDisabled?: boolean;
  isOutline?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: (e: any) => void;
  children: ReactNode;
}

export const NButton = (props: Props) => {
  const {
    children,
    type = 'button',
    size = Size.MD,
    className = '',
    isDisabled = false,
    isOutline = false,
    isLoading = false,
    loadingText = 'Loading...',
    onClick = () => undefined,
    ...remaining
  } = props;

  return (
    <Button
      type={type}
      className={`nyn-button ${size.toLowerCase()} ${
        isOutline
          ? 'text-primary hover:text-white bg-transparent hover:bg-primary-dark border border-primary'
          : 'text-white bg-primary border border-primary hover:bg-primary-dark'
      } rounded h-auto transition duration-150 ease-in-out h-auto ${sizeMapping[size]} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      {...remaining}>
      {!isLoading ? children : loadingText}
    </Button>
  );
};
