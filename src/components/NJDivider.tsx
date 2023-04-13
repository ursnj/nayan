interface Props {
  className?: string;
}

export const NJDivider = (props: Props) => {
  const { className = '' } = props;
  return <div className={`njn-divider border-top ${className}`} />;
};
