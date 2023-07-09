import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  id: string;
  type?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (val: any) => void;
}

// TODO: Fix React hook form
export const NInput = (props: Props) => {
  const { type = 'text', id, label = '', placeholder = '', className = '', value = '', defaultValue = '', onChange, ...remaining } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-input-label block pb-1 nyn-text-muted">
          {label}
        </Label>
      )}
      <Input
        type={type}
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
