import { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

interface Props {
  title: string;
  message: string;
  className?: string;
  confirmText?: string;
  cancelText?: string;
  trigger: ReactNode;
  onConfirmClick: () => void;
  onCancelClick: () => void;
}

export const NConfirmAlert = (props: Props) => {
  const { title, message, trigger, className = '', confirmText = 'Confirm', cancelText = 'Cancel' } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={`nyn-confirm-alert-trigger ${className}`}>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="nyn-confirm-alert nyn-border nyn-background-card p-3">
        <AlertDialogHeader>
          <AlertDialogTitle className="nyn-confirm-alert-title nyn-text">{title}</AlertDialogTitle>
          <AlertDialogDescription className="nyn-confirm-alert-message nyn-text">{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="nyn-text nyn-background-card nyn-border" onClick={props.onCancelClick}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className="nyn-text nyn-background-primary nyn-border-primary" onClick={props.onConfirmClick}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
