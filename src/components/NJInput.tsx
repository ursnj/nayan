interface Props {
  type?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (val: any) => void;
}

export const NJInput = (props: Props) => {
  const { type = 'text', label = '', placeholder = '', className = '', value = '', defaultValue = '', onChange, ...remaining } = props;
  return (
    <div className={className}>
      {label && <label className="block pb-1 text-muted">{label}</label>}
      <input
        type={type}
        {...(value && { value })}
        {...(defaultValue && { defaultValue })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className="w-full rounded card-background border text px-3 py-2"
      />
    </div>
  );
};
