interface Props {
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '' } = props;
  return <div className={`njn-divider border-top ${className}`} />;
};
