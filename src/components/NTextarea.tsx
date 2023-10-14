import { Textarea, TextareaProps } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Props extends TextareaProps {
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (val: any) => void;
}

export const NTextarea = (props: Props) => {
  const { label = '', id = 'textarea', placeholder = '', className = '', value = '', onChange, ...remaining } = props;
  return (
    <div className={`nyn-textarea-block ${className}`}>
      {label && (
        <Label htmlFor={id} className="nyn-textarea-label block pb-2 text-muted">
          {label}
        </Label>
      )}
      <Textarea
        id={id}
        {...(value && { value })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className="nyn-textarea w-full rounded bg-card border border-border text-text px-3 py-2"
      />
    </div>
  );
};
