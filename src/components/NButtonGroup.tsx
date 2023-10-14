import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
  items: string[];
  selected: string;
  onChange: (selected: string) => void;
}

export const NButtonGroup = (props: Props) => {
  const { className = '', items, selected, onChange } = props;
  return (
    <div className="rounded" role="group">
      {items.map(item => (
        <Button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`nyn-button-group ${
            item === selected ? 'bg-primary text-white' : 'bg-card text-text'
          } hover:bg-primary hover:text-white border border-border first:border-r-0 last:border-l-0 first:rounded-l-lg rounded-none last:rounded-r-lg px-3 py-2 h-auto mx-0 outline-none focus:shadow-outline ${className}`}>
          {item}
        </Button>
      ))}
    </div>
  );
};
