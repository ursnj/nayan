import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface Props {
  selected: string;
  placeholder: string;
  label?: string;
  title?: string;
  className?: string;
  items: { label: string; value: string }[];
  onChange: (selected: string) => void;
}

export const NSelect = (props: Props) => {
  const { className = '', placeholder, title = '', label = '', items, selected } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor="select" className="nyn-input-label block pb-1 nyn-text-muted">
          {label}
        </Label>
      )}
      <Select defaultValue={selected} value={selected} onValueChange={props.onChange}>
        <SelectTrigger className="nyn-text nyn-background-card nyn-border">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="nyn-text nyn-background-card nyn-border">
          <SelectGroup>
            {title && <SelectLabel>{title}</SelectLabel>}
            {items.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
