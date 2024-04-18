import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface Props extends InputProps {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  control: any;
  rules?: any;
  name: string;
  errors?: any;
}

export const NFormInput = (props: Props) => {
  const { control, rules, errors = {}, name, type = 'text', id = 'form-input', label = '', placeholder = '', className = '', labelClassName = '', inputClassName = '', ...remaining } = props;
  return (
    <Controller
      control={control}
      name={name}
      // rules={!rules && isRequired ? {
      //   required: {
      //     value: isRequired,
      //     message: `${label || name} is required!`
      //   }
      // } as any : null}
      render={({ field: { onChange, value, onBlur } }) => (
        <div className={cn(`nyn-form-input-block ${className}`)}>
          {label && (
            <Label htmlFor={id} className={cn(`nyn-form-input-label block pb-2 text-text ${labelClassName}`)}>
              {label}
            </Label>
          )}
          <Input
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            {...(value && { value })}
            {...(placeholder && { placeholder })}
            {...remaining}
            className={cn(`nyn-form-input w-full rounded bg-card border border-border text-text px-3 py-2 ${inputClassName}`)}
          />
        </div>
      )}
    />
  );
};
