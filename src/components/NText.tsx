interface Props {
  children: string;
  className?: string;
  onClick?: any;
}

export const NText = (props: Props) => {
  const { children, className = '' } = props;
  return (
    <div className={`nyn-text ${className}`} onClick={props.onClick}>
      {children}
    </div>
  );
};
