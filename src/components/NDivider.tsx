import { Separator } from '@/components/ui/separator';

interface Props {
  orientation?: 'vertical' | 'horizontal' | undefined;
  className?: string;
}

export const NDivider = (props: Props) => {
  const { className = '', orientation = 'horizontal' } = props;
  return <Separator orientation={orientation} className={`bg-border ${className}`} />;
};
