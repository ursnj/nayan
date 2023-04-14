interface Props {
  text: string;
  className?: string;
  onClick?: any;
}

export const NText = (props: Props) => {
  const { text, className = '' } = props;
  return (
    <div className={`nyn-text ${className}`} onClick={props.onClick}>
      {text}
    </div>
  );
};
