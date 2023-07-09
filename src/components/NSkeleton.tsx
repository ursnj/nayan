import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  className?: string;
}

export const NSkeleton = (props: Props) => {
  const { className = '' } = props;
  return <Skeleton className={`nyn-skeleton nyn-background-border ${className}`} />;
};
