interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
}

export const NJInput = (props: Props) => {
  const { type = 'text', label = '', placeholder = '' } = props;
  return (
    <div className="mb-3">
      {label && <label className="block pb-1 text-muted">{label}</label>}
      <input type={type} placeholder={placeholder} className="w-full rounded card-background border text px-3 py-2" />
    </div>
  );
};
