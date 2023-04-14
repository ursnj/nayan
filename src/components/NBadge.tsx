import { CloseIcon } from './Icons';

export enum BadgeSize {
  'XS' = 'XS',
  'SM' = 'SM',
  'MD' = 'MD',
  'LG' = 'LG'
}

const sizeMapping = {
  [BadgeSize.XS]: 'px-2 py-0.5 text-xs',
  [BadgeSize.SM]: 'px-2 py-1 text-sm',
  [BadgeSize.MD]: 'px-2 py-1 text-base',
  [BadgeSize.LG]: 'px-2 py-1 text-lg'
};

const iconMapping = {
  [BadgeSize.XS]: 'w-3 h-3',
  [BadgeSize.SM]: 'w-4 h-4',
  [BadgeSize.MD]: 'w-4 h-4',
  [BadgeSize.LG]: 'w-5 h-5'
};

interface Props {
  size: BadgeSize;
  name: string;
  className?: string;
  onClose?: any;
}

export const NBadge = (props: Props) => {
  const { className = '', size = BadgeSize.SM, name, onClose } = props;

  return (
    <span className={`nyn-badge ${size.toLowerCase()} items-center rounded-full ${sizeMapping[size]} ${className}`}>
      <span className="">{name}</span>
      {onClose && (
        <span className="cursor-pointer" onClick={onClose}>
          <CloseIcon className={`inline ml-2 ${iconMapping[size]}`} />
        </span>
      )}
    </span>
  );
};
