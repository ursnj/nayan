import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const NCard = (props: Props) => {
  const { className = '', children } = props;
  return <div className={`nyn-card nyn-border rounded nyn-background-card ${className}`}>{children}</div>;
};
