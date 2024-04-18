import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  buttonClassName?: string;
  items: string[];
  selected: string;
  onChange: (selected: string) => void;
}

export const NButtonGroup = (props: Props) => {
  const { className = '', buttonClassName = '', items, selected, onChange } = props;
  return (
    <div className={cn(`nyn-button-group rounded ${className}`)} role="group">
      {items.map(item => (
        <Button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(`nyn-button-group-item ${
            item === selected ? 'bg-primary text-white' : 'bg-card text-text'
          } hover:bg-primary hover:text-white border border-border first:border-r-0 last:border-l-0 first:rounded-l-lg rounded-none last:rounded-r-lg px-3 py-2 h-auto mx-0 outline-none focus:shadow-outline ${buttonClassName}`)}>
          {item}
        </Button>
      ))}
    </div>
  );
};
