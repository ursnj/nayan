import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface Props {
  isOpen: boolean;
  selected: string;
  placeholder: string;
  label?: string;
  className?: string;
  items: { label: string; value: string }[];
  onChange: (selected: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const NCombo = (props: Props) => {
  const { className = '', placeholder, label = '', items, selected, isOpen, setIsOpen } = props;
  return (
    <div className={`nyn-combo-block ${className}`}>
      {label && (
        <Label htmlFor="combo" className="nyn-combo-label block pb-1 nyn-text-muted">
          {label}
        </Label>
      )}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={isOpen} className="w-full justify-between nyn-text nyn-background-card nyn-border">
            {selected ? items.find(item => item.value === selected)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] min-w-full p-0 nyn-text nyn-background-card nyn-border">
          <Command className="nyn-border-bottom">
            <CommandInput placeholder="Search options..." />
            <CommandEmpty>No match found.</CommandEmpty>
            <CommandGroup>
              {items.map(item => (
                <CommandItem
                  key={item.value}
                  onSelect={currentValue => {
                    console.log(currentValue);
                    props.onChange(currentValue === selected ? '' : currentValue);
                    setIsOpen(false);
                  }}>
                  <Check className={cn('mr-2 h-4 w-4', selected === item.value ? 'opacity-100' : 'opacity-0')} />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
