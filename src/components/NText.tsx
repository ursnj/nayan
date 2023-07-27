import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: any;
}

export const NText = (props: Props) => {
  const { children, className = '' } = props;

  return (
    <div className={`text-text ${className}`} onClick={props.onClick}>
      {children}
    </div>
  );
};
