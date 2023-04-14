import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './Icons';

export enum AlertTypes {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

const iconsMapping = {
  [AlertTypes.INFO]: <InfoIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.SUCCESS]: <SuccessIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.WARNING]: <WarningIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.ERROR]: <ErrorIcon className="w-5 h-5 mr-2" />
};

const classesMapping = {
  [AlertTypes.INFO]: 'bg-blue-300 text-blue-700 border border-blue-700',
  [AlertTypes.SUCCESS]: 'bg-green-300 text-green-700 border border-green-700',
  [AlertTypes.WARNING]: 'bg-yellow-300 text-yellow-700 border border-yellow-700',
  [AlertTypes.ERROR]: 'bg-red-300 text-red-700 border border-red-700'
};

interface Props {
  type: AlertTypes;
  message: string;
  className?: string;
  onClose?: any;
}

export const NAlert = (props: Props) => {
  const { className = '', type, message, onClose } = props;

  return (
    <div
      className={`nyn-alert ${type.toLowerCase()} flex flex-row items-center justify-between rounded py-2 px-3 ${classesMapping[type]} ${className}`}>
      <div className="flex flex-row items-center">
        <span>{iconsMapping[type]}</span>
        <span>{message}</span>
      </div>
      {onClose && (
        <div className="cursor-pointer" onClick={onClose}>
          <CloseIcon className="w-5 h-5 ml-2" />
        </div>
      )}
    </div>
  );
};
