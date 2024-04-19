import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: (e: any) => void;
}

export const NCard = (props: Props) => {
  const { className = '', children, onClick, ...remaining } = props;
  return (
    <div className={cn(`nyn-card border border-border bg-card rounded ${className}`)} onClick={onClick} onKeyDown={onClick} {...remaining}>
      {children}
    </div>
  );
};
