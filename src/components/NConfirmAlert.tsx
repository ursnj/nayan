import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  message: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  messageClassName?: string;
  cancelClassName?: string;
  confirmClassName?: string;
  confirmText?: string;
  cancelText?: string;
  onResult: (result: boolean) => void;
  onClose: () => void;
}

export const NConfirmAlert = (props: Props) => {
  const {
    isOpen,
    title = 'Are you absolutely sure?',
    message,
    className = '',
    titleClassName = '',
    messageClassName = '',
    confirmClassName = '',
    cancelClassName = '',
    confirmText = 'Confirm',
    cancelText = 'Cancel'
  } = props;

  return (
    <AlertDialog open={isOpen} onOpenChange={props.onClose}>
      <AlertDialogContent className={cn(`nyn-confirm-alert border border-border bg-card p-3 ${className}`)}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn(`nyn-confirm-alert-title text-text ${titleClassName}`)}>{title}</AlertDialogTitle>
          <AlertDialogDescription className={cn(`nyn-confirm-alert-message text-text ${messageClassName}`)}>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={cn(`text-text bg-card border border-border ${cancelClassName}`)} onClick={() => props.onResult(false)}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className={cn(`text-white bg-primary border border-primary ${confirmClassName}`)} onClick={() => props.onResult(true)}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
