interface Props {
  color?: string;
}

export const NLoading = (props: Props) => {
  const color = props.color || 'gray';
  return (
    <div className="p-3">
      <div className="loader" style={{ fontSize: 5, color }}>
        Loading...
      </div>
    </div>
  );
};
