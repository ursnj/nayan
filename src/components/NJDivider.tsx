interface Props {
  hasMargin?: boolean;
}

export const NJDivider = (props: Props) => {
  return <div className={`border-top ${props.hasMargin ? 'my-3' : 'my-0'}`} />;
};
