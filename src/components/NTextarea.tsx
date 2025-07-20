import React, { forwardRef, ReactNode, useId, memo } from 'react';
import { Textarea, TextareaProps } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface NTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  id?: string;
  label?: ReactNode;
  labelClassName?: string;
  textareaClassName?: string;
  wrapperClassName?: string;
  error?: ReactNode;
  helperText?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const NTextarea = memo(
  forwardRef<HTMLTextAreaElement, NTextareaProps>(
    (
      {
        id,
        label,
        labelClassName = '',
        textareaClassName = '',
        wrapperClassName = '',
        className = '',
        error,
        helperText,
        onChange,
        required,
        disabled,
        ...rest
      },
      ref
    ) => {
      const generatedId = useId();
      const textareaId = id || `ntextarea-${generatedId}`;
      const describedBy = [helperText ? `${textareaId}-helper` : '', error ? `${textareaId}-error` : ''].filter(Boolean).join(' ') || undefined;
      return (
        <div className={cn('nyn-textarea-block', wrapperClassName, className)}>
          {label && (
            <Label htmlFor={textareaId} className={cn('nyn-textarea-label block pb-2 text-text', labelClassName)}>
              {label}
              {required && (
                <span aria-hidden="true" className="text-error ml-1">
                  *
                </span>
              )}
            </Label>
          )}
          <Textarea
            id={textareaId}
            ref={ref}
            className={cn('nyn-textarea w-full rounded bg-card border border-border text-text px-3 py-2', textareaClassName)}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            required={required}
            disabled={disabled}
            onChange={onChange}
            {...rest}
          />
          {helperText && (
            <div id={`${textareaId}-helper`} className="nyn-textarea-helper text-xs text-muted-foreground mt-1">
              {helperText}
            </div>
          )}
          {error && (
            <div id={`${textareaId}-error`} className="nyn-textarea-error text-xs text-error mt-1">
              {error}
            </div>
          )}
        </div>
      );
    }
  )
);

NTextarea.displayName = 'NTextarea';
