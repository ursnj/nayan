import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  id?: string;
  type?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (val: any) => void;
}

// TODO: Fix React hook form
export const NInput = (props: Props) => {
  const {
    type = 'text',
    id = 'input',
    label = '',
    placeholder = '',
    className = '',
    value = '',
    defaultValue = '',
    isDisabled = false,
    onChange,
    ...remaining
  } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-input-label block pb-2 text-muted">
          {label}
        </Label>
      )}
      <Input
        type={type}
        {...(value && { value })}
        {...(defaultValue && { defaultValue })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        disabled={isDisabled}
        {...remaining}
        className="nyn-input w-full rounded bg-card border border-border text-text px-3 py-2"
      />
    </div>
  );
};
