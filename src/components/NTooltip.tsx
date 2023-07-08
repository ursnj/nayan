import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  message: string;
  className?: string;
  children: ReactNode;
}

export const NTooltip = (props: Props) => {
  const { message, className = '', children } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className={`nyn-card nyn-text nyn-border rounded nyn-background-card p-2 max-w-xs ${className}`}>{message}</TooltipContent>
    </Tooltip>
  );
};
