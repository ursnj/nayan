import { Textarea, TextareaProps } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface Props extends TextareaProps {
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  textareaClassName?: string;
  onChange?: (val: any) => void;
}

export const NTextarea = (props: Props) => {
  const {
    label = '',
    id = 'textarea',
    placeholder = '',
    className = '',
    labelClassName = '',
    textareaClassName = '',
    value = '',
    onChange,
    ...remaining
  } = props;
  return (
    <div className={cn(`nyn-textarea-block ${className}`)}>
      {label && (
        <Label htmlFor={id} className={cn(`nyn-textarea-label block pb-2 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      <Textarea
        id={id}
        {...(value && { value })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className={cn(`nyn-textarea w-full rounded bg-card border border-border text-text px-3 py-2 ${textareaClassName}`)}
      />
    </div>
  );
};
