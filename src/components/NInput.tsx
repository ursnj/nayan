import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props extends InputProps {
  id?: string;
  type?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (val: any) => void;
}

export const NInput = (props: Props) => {
  const { type = 'text', id = 'input', label = '', placeholder = '', className = '', value = '', onChange, ...remaining } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-input-label block pb-2 text-text">
          {label}
        </Label>
      )}
      <Input
        type={type}
        {...(value && { value })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className="nyn-input w-full rounded bg-card border border-border text-text px-3 py-2"
      />
    </div>
  );
};
