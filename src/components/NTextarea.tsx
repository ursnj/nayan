import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Props {
  id?: string;
  rows?: number;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (val: any) => void;
}

// TODO: Fix React hook form
export const NTextarea = (props: Props) => {
  const {
    label = '',
    id = 'textarea',
    rows = 2,
    placeholder = '',
    className = '',
    value = '',
    defaultValue = '',
    isDisabled = false,
    onChange,
    ...remaining
  } = props;
  return (
    <div className={`nyn-textarea-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-textarea-label block pb-2 text-muted">
          {label}
        </Label>
      )}
      <Textarea
        id={id}
        rows={rows}
        {...(value && { value })}
        {...(defaultValue && { defaultValue })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        disabled={isDisabled}
        {...remaining}
        className="nyn-textarea w-full rounded bg-card border border-border text-text px-3 py-2"
      />
    </div>
  );
};
