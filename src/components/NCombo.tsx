import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ComboBoxItem } from '@/components/Types';

interface Props {
  isOpen: boolean;
  selected: string;
  placeholder: string;
  label?: string;
  className?: string;
  items: ComboBoxItem[];
  onChange: (selected: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const NCombo = (props: Props) => {
  const { className = '', placeholder, label = '', items, selected, isOpen, setIsOpen } = props;
  return (
    <div className={`nyn-combo-block ${className}`}>
      {label && (
        <Label htmlFor="combo" className="nyn-combo-label block pb-2 text-text">
          {label}
        </Label>
      )}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={isOpen} className="w-full justify-between text-text bg-card border border-border">
            {selected ? items.find(item => item.value === selected)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] min-w-full p-0 text-text bg-card border border-border">
          <Command className="border-0 border-b border-border">
            <CommandInput placeholder="Search options..." />
            <CommandEmpty>No match found.</CommandEmpty>
            <CommandGroup>
              {items.map(item => (
                <CommandItem
                  key={item.value}
                  onSelect={currentValue => {
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
