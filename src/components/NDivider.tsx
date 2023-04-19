interface Props {
  text?: string;
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '', text = '' } = props;
  return (
    <div className={`nyn-divider relative flex py-5 items-center ${className}`}>
      <div className="flex-grow nyn-border-top"></div>
      {text && <span className="nyn-divider-text nyn-text-muted flex-shrink mx-3">{text}</span>}
      <div className="flex-grow nyn-border-top"></div>
    </div>
  );
};
