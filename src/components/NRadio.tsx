import { ReactNode } from 'react';
import { Size } from './Types';

const sizeMapping = {
  [Size.XS]: 'mr-1.5 w-3 h-3',
  [Size.SM]: 'mr-2 w-3.5 h-3.5',
  [Size.MD]: 'mr-2 w-4 h-4',
  [Size.LG]: 'mr-3 w-5 h-5'
};

const labelSizeMapping = {
  [Size.XS]: 'text-xs',
  [Size.SM]: 'text-sm',
  [Size.MD]: 'text-base',
  [Size.LG]: 'text-lg'
};

interface Props {
  name?: string;
  size?: Size;
  className?: string;
  children: ReactNode;
  value: string;
  selectedValue: string;
  onChange: any;
}

export const NRadio = (props: Props) => {
  const { name = '', className = '', children, value, selectedValue, onChange, size = Size.SM } = props;

  return (
    <div className={`nyn-radio-block flex flex-row items-center ${className}`}>
      <input
        className={`nyn-radio ${sizeMapping[size]}`}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={value === selectedValue}
      />
      <label className={`nyn-radio-label nyn-text ${labelSizeMapping[size]}`}>{children}</label>
    </div>
  );
};
