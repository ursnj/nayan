import { Button } from '@/components/ui/button';

interface Props {
  selected: string;
  className?: string;
  items: string[];
  setSelected: (selected: string) => void;
}

export const NButtonGroup = (props: Props) => {
  const { className = '', items, selected, setSelected } = props;
  return (
    <div className="rounded" role="group">
      {items.map(item => (
        <Button
          key={item}
          onClick={() => setSelected(item)}
          className={`nyn-button-group ${
            item === selected ? 'bg-primary' : 'bg-card'
          } text-text hover:bg-primary hover:text-white nyn-border first:border-r-0 last:border-l-0 first:rounded-l-lg rounded-none last:rounded-r-lg px-4 py-1 mx-0 outline-none focus:shadow-outline ${className}`}>
          {item}
        </Button>
      ))}
    </div>
  );
};
