import { Skeleton } from './ui/skeleton';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
}

export const NSkeleton = (props: Props) => {
  return <Skeleton className={cn('bg-muted dark:bg-muted', props.className)} />;
};
