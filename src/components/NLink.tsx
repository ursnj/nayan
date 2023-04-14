import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: any;
}

export const NLink = (props: Props) => {
  const { className = '', children } = props;
  return (
    <span className={`nyn-link nyn-text-primary cursor-pointer ${className}`} onClick={props.onClick}>
      {children}
    </span>
  );
};
