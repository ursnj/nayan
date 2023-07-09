import { ReactNode } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
  isChecked: any;
  onChange: any;
}

export const NCheck = (props: Props) => {
  const { className = '', id = 'check', children, isChecked, onChange } = props;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox
        id={id}
        value={isChecked}
        onCheckedChange={onChange}
        className="nyn-check data-[state=unchecked]:border-text data-[state=checked]:border-primary"
      />
      <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {children}
      </label>
    </div>
  );
};
