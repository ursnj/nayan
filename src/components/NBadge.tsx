import { Badge } from '@/components/ui/badge';
import { Size } from './Types';

const sizeMapping = {
  [Size.XS]: 'px-2 py-0.5 text-xs',
  [Size.SM]: 'px-2 py-0 text-sm',
  [Size.MD]: 'px-3 py-0 text-base',
  [Size.LG]: 'px-3 py-0 text-lg'
};

interface Props {
  size: Size;
  name: string;
  className?: string;
}

export const NBadge = (props: Props) => {
  const { className = '', size = Size.SM, name, ...remaining } = props;

  return (
    <Badge className={`nyn-badge ${size.toLowerCase()} rounded-full font-normal ${sizeMapping[size]} ${className}`} {...remaining}>
      {name}
    </Badge>
  );
};
