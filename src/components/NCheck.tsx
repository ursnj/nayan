import { ReactNode } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface Props {
  id?: string;
  className?: string;
  checkClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  children: ReactNode;
  checked: any;
  onChange: (checked: boolean) => void;
}

export const NCheck = (props: Props) => {
  const { className = '', checkClassName = '', labelClassName = '', id = 'check', children, checked, disabled = false, onChange } = props;

  return (
    <div className={cn(`flex space-x-2 ${className}`)}>
      <Checkbox
        id={id}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onChange}
        className={cn(
          `nyn-check data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=unchecked]:border-muted data-[state=checked]:border-primary ${checkClassName}`
        )}
      />
      <label htmlFor={id} className={cn(`-mt-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${labelClassName}`)}>
        {children}
      </label>
    </div>
  );
};
