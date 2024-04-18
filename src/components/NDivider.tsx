import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface Props {
  orientation?: 'vertical' | 'horizontal' | undefined;
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '', orientation = 'horizontal' } = props;
  return <Separator orientation={orientation} className={cn(`bg-border ${className}`)} />;
};
