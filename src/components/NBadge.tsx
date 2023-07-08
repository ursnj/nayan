import { X } from 'lucide-react';
import { Size } from './Types';

const sizeMapping = {
  [Size.XS]: 'px-2 py-0.5 text-xs',
  [Size.SM]: 'px-2 py-1 text-sm',
  [Size.MD]: 'px-2 py-1 text-base',
  [Size.LG]: 'px-2 py-1 text-lg'
};

const iconMapping = {
  [Size.XS]: 'w-3 h-3',
  [Size.SM]: 'w-4 h-4',
  [Size.MD]: 'w-4 h-4',
  [Size.LG]: 'w-5 h-5'
};

interface Props {
  size: Size;
  name: string;
  className?: string;
  onClose?: () => void;
}

export const NBadge = (props: Props) => {
  const { className = '', size = Size.SM, name, onClose } = props;

  return (
    <span className={`nyn-badge ${size.toLowerCase()} items-center rounded-full ${sizeMapping[size]} ${className}`}>
      <span className="njn-badge-text">{name}</span>
      {onClose && (
        <span className="nyn-badge-close cursor-pointer" onClick={onClose}>
          <X className={`inline ml-2 ${iconMapping[size]}`} />
        </span>
      )}
    </span>
  );
};
