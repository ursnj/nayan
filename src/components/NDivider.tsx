interface Props {
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '' } = props;
  return <div className={`nyn-divider border-top ${className}`} />;
};
