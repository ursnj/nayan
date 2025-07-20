import React, { ReactNode, memo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export interface NCheckProps {
  id?: string;
  className?: string;
  checkClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  renderLabel?: (children: ReactNode) => React.ReactNode;
}

const NCheckComponent: React.FC<NCheckProps> = memo(
  ({
    id = 'check',
    className = '',
    checkClassName = '',
    labelClassName = '',
    checked,
    disabled = false,
    onChange,
    children,
    renderLabel,
    ...rest
  }) => {
    return (
      <div className={cn('flex space-x-2 mb-3', className)}>
        <Checkbox
          id={id}
          disabled={disabled}
          checked={checked}
          aria-checked={checked}
          aria-disabled={disabled}
          onCheckedChange={onChange}
          className={cn(
            'nyn-check data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=unchecked]:border-muted data-[state=checked]:border-primary',
            checkClassName
          )}
          {...rest}
        />
        <label htmlFor={id} className={cn('-mt-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70', labelClassName)}>
          {renderLabel ? renderLabel(children) : children}
        </label>
      </div>
    );
  }
);

NCheckComponent.displayName = 'NCheck';

export const NCheck = NCheckComponent;
