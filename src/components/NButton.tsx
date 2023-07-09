import { ReactNode } from 'react';
import { Size } from './Types';
import { Button } from '@/components/ui/button';

const sizeMapping = {
  [Size.XS]: 'px-2 py-0.5 text-xs',
  [Size.SM]: 'px-2 py-1 text-sm',
  [Size.MD]: 'px-3 py-1 text-base',
  [Size.LG]: 'px-4 py-1 text-lg'
};

interface Props {
  size?: Size;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const NButton = (props: Props) => {
  const {
    children,
    type = 'button',
    size = Size.MD,
    className = '',
    isLoading = false,
    loadingText = 'Loading...',
    onClick = () => undefined
  } = props;

  return (
    <Button
      type={type}
      className={`nyn-button ${size.toLowerCase()} rounded h-auto transition duration-150 ease-in-out ${sizeMapping[size]} ${className}`}
      onClick={onClick}>
      {!isLoading ? children : loadingText}
    </Button>
  );
};
