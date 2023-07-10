import { Button } from '@/components/ui/button';

interface Props {
  selected: string;
  className?: string;
  setSelected: (selected: string) => void;
  items: { label: string; value: string }[];
}

export const NButtonGroup = (props: Props) => {
  const { className = '', items, selected, setSelected } = props;
  return (
    <div className="rounded" role="group">
      {items.map(item => (
        <Button
          onClick={() => setSelected(item.value)}
          className={`nyn-button-group ${
            item.value === selected ? 'bg-primary' : 'bg-card'
          } text-text hover:bg-primary hover:text-white nyn-border first:border-r-0 last:border-l-0 first:rounded-l-lg rounded-none last:rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline ${className}`}>
          {item.label}
        </Button>
      ))}
    </div>
  );
};
