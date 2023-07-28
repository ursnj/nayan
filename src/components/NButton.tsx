import { ReactNode } from 'react';
import { Size } from './Types';
import { Button } from '@/components/ui/button';

const sizeMapping = {
  [Size.XS]: 'px-2 py-0.5 text-xs',
  [Size.SM]: 'px-2 py-1 text-sm',
  [Size.MD]: 'px-3 py-2 text-base',
  [Size.LG]: 'px-4 py-2 text-lg'
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
    onClick = () => undefined,
    ...remaining
  } = props;

  return (
    <Button
      type={type}
      className={`nyn-button ${size.toLowerCase()} text-white bg-primary border-primary hover:bg-primary-dark rounded h-auto transition duration-150 ease-in-out h-auto ${
        sizeMapping[size]
      } ${className}`}
      onClick={onClick}
      {...remaining}>
      {!isLoading ? children : loadingText}
    </Button>
  );
};
