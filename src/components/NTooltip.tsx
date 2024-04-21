import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface Props {
  message: string;
  className?: string;
  triggerClassName?: string;
  children: ReactNode;
}

export const NTooltip = (props: Props) => {
  const { message, className = '', triggerClassName = '', children } = props;
  return (
    <Tooltip>
      <TooltipTrigger className={triggerClassName}>{children}</TooltipTrigger>
      <TooltipContent className={cn(`nyn-tooltip text-text border border-border rounded bg-card p-2 max-w-xs ${className}`)}>
        {message}
      </TooltipContent>
    </Tooltip>
  );
};
