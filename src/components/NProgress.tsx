import { Progress } from '@/components/ui/progress';

interface Props {
  className?: string;
  value: number;
}

export const NProgress = (props: Props) => {
  const { className = '', value } = props;
  return <Progress value={value} className={`nyn-progress border border-border bg-card rounded ${className}`} />;
};
