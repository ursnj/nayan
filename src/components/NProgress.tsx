import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  value: number;
}

export const NProgress = (props: Props) => {
  const { className = '', value } = props;
  return <Progress value={value} className={cn(`nyn-progress bg-border rounded ${className}`)} />;
};
