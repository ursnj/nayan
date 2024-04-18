import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, BadgeAlert, CheckCircle2, Info, X, XCircle } from 'lucide-react';
import { AlertTypes } from './Types';
import { cn } from '@/lib/utils';

const iconsMapping = {
  [AlertTypes.DEFAULT]: <BadgeAlert className="h-4 w-4" />,
  [AlertTypes.INFO]: <Info className="h-4 w-4" />,
  [AlertTypes.SUCCESS]: <CheckCircle2 className="h-4 w-4" />,
  [AlertTypes.WARNING]: <AlertTriangle className="h-4 w-4" />,
  [AlertTypes.ERROR]: <XCircle className="h-4 w-4" />
};

const classesMapping = {
  [AlertTypes.DEFAULT]: 'bg-card text-text border-border',
  [AlertTypes.INFO]: 'bg-blue-300 text-blue-700 border border-blue-400',
  [AlertTypes.SUCCESS]: 'bg-green-300 text-green-700 border border-green-400',
  [AlertTypes.WARNING]: 'bg-yellow-300 text-yellow-700 border border-yellow-400',
  [AlertTypes.ERROR]: 'bg-red-300 text-red-700 border border-red-400'
};

const titleMapping = {
  [AlertTypes.DEFAULT]: 'Alert!',
  [AlertTypes.INFO]: 'Information!',
  [AlertTypes.SUCCESS]: 'Success!',
  [AlertTypes.WARNING]: 'Warning!',
  [AlertTypes.ERROR]: 'Error!'
};

interface Props {
  type: AlertTypes;
  message: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  messageClassName?: string;
  closeClassName?: string;
  onClose?: () => void;
}

export const NAlert = (props: Props) => {
  const { className = '', titleClassName = '', messageClassName = '', closeClassName = '', type, title = titleMapping[type], message, onClose } = props;

  return (
    <Alert
      className={cn(`nyn-alert ${type.toLowerCase()} [&:has(svg)]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg]:nyn-text rounded p-3 ${
        classesMapping[type]
      } ${className}`)}>
      {iconsMapping[type]}
      <AlertTitle className={cn(`nyn-alert-title mb-1.5 font-semibold flex flex-row justify-between items-center ${titleClassName}`)}>
        {title}
        {onClose && (
          <span className={cn(`nyn-alert-close${closeClassName}`)} tabIndex={1} role="button" onClick={onClose} onKeyDown={onClose}>
            <X className="w-4 h-4" />
          </span>
        )}
      </AlertTitle>
      <AlertDescription className={cn(`nyn-alert-message ${messageClassName}`)}>{message}</AlertDescription>
    </Alert>
  );
};
