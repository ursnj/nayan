interface Props {
  text: string;
  className?: string;
  onClick?: any;
}

export const NJText = (props: Props) => {
  const { text, className = '' } = props;
  return (
    <div className={`text-ni ${className}`} onClick={props.onClick}>
      {text}
    </div>
  );
};
