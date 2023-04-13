interface Props {
  text: string;
  className?: string;
  onClick?: any;
}

export const NJText = (props: Props) => {
  const { text, className = '' } = props;
  return (
    <div className={`njn-text text ${className}`} onClick={props.onClick}>
      {text}
    </div>
  );
};
