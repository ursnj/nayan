import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './Icons';

export enum AlertTypes {
  DEFAULT = 'DEFAULT',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

const iconsMapping = {
  [AlertTypes.DEFAULT]: <InfoIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.INFO]: <InfoIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.SUCCESS]: <SuccessIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.WARNING]: <WarningIcon className="w-5 h-5 mr-2" />,
  [AlertTypes.ERROR]: <ErrorIcon className="w-5 h-5 mr-2" />
};

const classesMapping = {
  [AlertTypes.DEFAULT]: 'nyn-background-card nyn-text nyn-border',
  [AlertTypes.INFO]: 'bg-blue-300 text-blue-700 border border-blue-400',
  [AlertTypes.SUCCESS]: 'bg-green-300 text-green-700 border border-green-400',
  [AlertTypes.WARNING]: 'bg-yellow-300 text-yellow-700 border border-yellow-400',
  [AlertTypes.ERROR]: 'bg-red-300 text-red-700 border border-red-400'
};

interface Props {
  type: AlertTypes;
  message: string;
  className?: string;
  onClose?: () => void;
}

export const NAlert = (props: Props) => {
  const { className = '', type, message, onClose } = props;

  return (
    <div
      className={`nyn-alert ${type.toLowerCase()} flex flex-row items-center justify-between rounded py-2 px-3 ${classesMapping[type]} ${className}`}>
      <div className="flex flex-row items-center">
        <span className="nyn-alert-icon">{iconsMapping[type]}</span>
        <span className="nyn-alert-text">{message}</span>
      </div>
      {onClose && (
        <div className="nyn-alert-close cursor-pointer" onClick={onClose}>
          <CloseIcon className="w-5 h-5 ml-2" />
        </div>
      )}
    </div>
  );
};
