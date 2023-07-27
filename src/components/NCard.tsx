import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const NCard = (props: Props) => {
  const { className = '', children } = props;
  return <div className={`nyn-card border border-border bg-card rounded ${className}`}>{children}</div>;
};
