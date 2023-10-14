import { ReactNode } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  id?: string;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  checked: any;
  onChange: (checked: boolean) => void;
}

export const NCheck = (props: Props) => {
  const { className = '', id = 'check', children, checked, disabled = false, onChange } = props;

  return (
    <div className={`flex space-x-2 ${className}`}>
      <Checkbox
        id={id}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onChange}
        className="nyn-check data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=unchecked]:border-muted data-[state=checked]:border-primary"
      />
      <label htmlFor={id} className="-mt-0.5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {children}
      </label>
    </div>
  );
};
