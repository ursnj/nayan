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

interface Props {
  isOpen: boolean;
  title: string;
  message: string;
  className?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirmClick: () => void;
  onCancelClick?: () => void;
  onCloseAlert: () => void;
}

export const NConfirmAlert = (props: Props) => {
  const { isOpen, title, message, className = '', confirmText = 'Confirm', cancelText = 'Cancel' } = props;

  return (
    <AlertDialog open={isOpen} onOpenChange={props.onCloseAlert}>
      <AlertDialogContent className={`nyn-confirm-alert border border-border bg-card p-3 ${className}`}>
        <AlertDialogHeader>
          <AlertDialogTitle className="nyn-confirm-alert-title text-text">{title}</AlertDialogTitle>
          <AlertDialogDescription className="nyn-confirm-alert-message text-text">{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-text bg-card border border-border" onClick={props.onCancelClick}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className="text-white bg-primary border border-primary" onClick={props.onConfirmClick}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
