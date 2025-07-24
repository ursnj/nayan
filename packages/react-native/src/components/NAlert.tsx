import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from '@/lib/icons/AlertCircle';
import { cn } from '@/lib/utils';

export interface NAlertProps {
  title?: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const NAlert = React.memo<NAlertProps>(({ title, description, className, titleClassName, descriptionClassName }) => {
  return (
    <Alert icon={AlertCircle} className={cn('w-full bg-card border-border shadow-none rounded', className)}>
      {title && <AlertTitle className={cn('font-medium mb-1', titleClassName)}>{title}</AlertTitle>}
      <AlertDescription className={cn('text-sm', descriptionClassName)}>{description}</AlertDescription>
    </Alert>
  );
});

NAlert.displayName = 'NAlert';
