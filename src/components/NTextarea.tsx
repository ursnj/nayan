interface Props {
  rows?: number;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (val: any) => void;
}

// TODO: Fix React hook form
export const NTextarea = (props: Props) => {
  const { label = '', rows = 2, placeholder = '', className = '', value = '', defaultValue = '', onChange, ...remaining } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && <label className="nyn-input-label block pb-1 nyn-text-muted">{label}</label>}
      <textarea
        rows={rows}
        {...(value && { value })}
        {...(defaultValue && { defaultValue })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className="nyn-input w-full rounded nyn-background-card nyn-border nyn-text px-3 py-2"
      />
    </div>
  );
};
