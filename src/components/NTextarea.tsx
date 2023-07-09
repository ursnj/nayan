import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Props {
  id: string;
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
  const { label = '', id, rows = 2, placeholder = '', className = '', value = '', defaultValue = '', onChange, ...remaining } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-input-label block pb-1 nyn-text-muted">
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
        {...remaining}
        className="nyn-input w-full rounded nyn-background-card nyn-border nyn-text px-3 py-2"
      />
    </div>
  );
};
