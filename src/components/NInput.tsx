import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface Props extends InputProps {
  id?: string;
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (val: any) => void;
}

export const NInput = (props: Props) => {
  const {
    type = 'text',
    id = 'input',
    label = '',
    placeholder = '',
    className = '',
    labelClassName = '',
    inputClassName = '',
    value = '',
    onChange,
    ...remaining
  } = props;
  return (
    <div className={cn(`nyn-input-block ${className}`)}>
      {label && (
        <Label htmlFor={id} className={cn(`nyn-input-label block pb-2 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      <Input
        type={type}
        {...(value && { value })}
        {...(placeholder && { placeholder })}
        {...(onChange && { onChange })}
        {...remaining}
        className={cn(`nyn-input w-full rounded bg-card border border-border text-text px-3 py-2 ${inputClassName}`)}
      />
    </div>
  );
};
