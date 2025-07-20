import React, { memo, ReactNode } from 'react';
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

export interface NConfirmAlertProps extends Omit<React.ComponentProps<typeof AlertDialog>, 'open' | 'onOpenChange'> {
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
  children?: ReactNode;
  renderActions?: (onResult: (result: boolean) => void) => ReactNode;
  renderHeader?: (title: string, message: string) => ReactNode;
}

const NConfirmAlertComponent: React.FC<NConfirmAlertProps> = memo(
  ({
    isOpen,
    title = 'Are you absolutely sure?',
    message,
    className = '',
    titleClassName = '',
    messageClassName = '',
    confirmClassName = '',
    cancelClassName = '',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onResult,
    onClose,
    children,
    renderActions,
    renderHeader,
    ...rest
  }) => {
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose} {...rest}>
        <AlertDialogContent className={cn('nyn-confirm-alert border border-border bg-card p-3', className)}>
          {renderHeader ? (
            renderHeader(title, message)
          ) : (
            <AlertDialogHeader>
              <AlertDialogTitle className={cn('nyn-confirm-alert-title text-text', titleClassName)}>{title}</AlertDialogTitle>
              <AlertDialogDescription className={cn('nyn-confirm-alert-message text-text', messageClassName)}>{message}</AlertDialogDescription>
            </AlertDialogHeader>
          )}
          {children}
          <AlertDialogFooter>
            {renderActions ? (
              renderActions(onResult)
            ) : (
              <>
                <AlertDialogCancel className={cn('text-text bg-border border border-border', cancelClassName)} onClick={() => onResult(false)}>
                  {cancelText}
                </AlertDialogCancel>
                <AlertDialogAction className={cn('text-white bg-primary border border-primary', confirmClassName)} onClick={() => onResult(true)}>
                  {confirmText}
                </AlertDialogAction>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);

NConfirmAlertComponent.displayName = 'NConfirmAlert';

export const NConfirmAlert = NConfirmAlertComponent;
