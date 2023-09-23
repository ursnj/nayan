interface Props {
  size?: string;
  color?: string;
}

export const NLoading = (props: Props) => {
  const size = props.size || 5;
  const color = props.color || 'gray';
  return (
    <div className="p-3">
      <div className="loader" style={{ fontSize: size, color }}>
        Loading...
      </div>
    </div>
  );
};
