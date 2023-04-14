interface Props {
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '' } = props;
  return <div className={`nyn-divider nyn-border-top ${className}`} />;
};
