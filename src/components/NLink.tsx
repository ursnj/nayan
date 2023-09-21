import { ReactNode } from 'react';

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
      <a className={`nyn-link text-primary cursor-pointer ${className}`} href={href} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <span className={`nyn-link text-primary cursor-pointer ${className}`} onClick={props.onClick}>
      {children}
    </span>
  );
};
