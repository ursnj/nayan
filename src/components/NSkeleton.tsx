import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const NSkeleton = (props: Props) => {
  const { className = '' } = props;
  return <Skeleton className={cn(`nyn-skeleton bg-border ${className}`)} />;
};
