import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { SelectBoxItem } from '@/components/Types';

interface Props {
  selected: string;
  placeholder: string;
  label?: string;
  title?: string;
  className?: string;
  items: SelectBoxItem[];
  onChange: (selected: string) => void;
}

export const NSelect = (props: Props) => {
  const { className = '', placeholder, title = '', label = '', items, selected } = props;
  return (
    <div className={`nyn-input-block ${className}`}>
      {label && (
        <Label htmlFor="select" className="nyn-input-label block pb-2 text-text">
          {label}
        </Label>
      )}
      <Select defaultValue={selected} value={selected} onValueChange={props.onChange}>
        <SelectTrigger className="text-text bg-card border border-border">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="text-text bg-card border border-border">
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
