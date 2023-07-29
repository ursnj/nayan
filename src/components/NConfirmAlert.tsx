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
  message: string;
  title?: string;
  className?: string;
  confirmText?: string;
  cancelText?: string;
  onResult: (result: boolean) => void;
  onClose: () => void;
}

export const NConfirmAlert = (props: Props) => {
  const { isOpen, title, message, className = '', confirmText = 'Confirm', cancelText = 'Cancel' } = props;

  return (
    <AlertDialog open={isOpen} onOpenChange={props.onClose}>
      <AlertDialogContent className={`nyn-confirm-alert border border-border bg-card p-3 ${className}`}>
        <AlertDialogHeader>
          {title && <AlertDialogTitle className="nyn-confirm-alert-title text-text">{title}</AlertDialogTitle>}
          <AlertDialogDescription className="nyn-confirm-alert-message text-text">{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-text bg-card border border-border" onClick={() => props.onResult(false)}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className="text-white bg-primary border border-primary" onClick={() => props.onResult(true)}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
