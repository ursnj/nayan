import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: any;
}

export const NLink = (props: Props) => {
  const { className = '', children, href = '' } = props;
  if (!!href) {
    return (
      <a role="link" className={cn(`nyn-link text-primary cursor-pointer ${className}`)} href={href} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <span role="link" className={cn(`nyn-link text-primary cursor-pointer ${className}`)} onClick={props.onClick}>
      {children}
    </span>
  );
};
