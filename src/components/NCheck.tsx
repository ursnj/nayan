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
  size?: Size;
  className?: string;
  children: ReactNode;
  isChecked: boolean;
  onChange: any;
}

export const NCheck = (props: Props) => {
  const { className = '', children, isChecked, onChange, size = Size.SM } = props;

  return (
    <div className={`nyn-check-block flex flex-row items-center ${className}`}>
      <input
        className={`nyn-check cursor-pointer ${sizeMapping[size]}`}
        type="checkbox"
        value={isChecked as any}
        onChange={onChange}
        checked={isChecked}
      />
      <label className={`nyn-check-label nyn-text ${labelSizeMapping[size]}`}>{children}</label>
    </div>
  );
};
