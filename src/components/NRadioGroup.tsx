import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { RadioItem } from '@/components/Types';

interface Props {
  orientation?: 'horizontal' | 'vertical';
  items: RadioItem[];
  className?: boolean;
  disabled?: boolean;
  selected: string;
  onChange: (selected: string) => void;
}

export const NRadioGroup = (props: Props) => {
  const { items, selected, onChange, orientation = 'horizontal', className = '', disabled = false } = props;

  return (
    <RadioGroup
      orientation={orientation}
      defaultValue={selected}
      value={selected}
      disabled={disabled}
      onValueChange={onChange}
      className={`${orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col'} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={item.value} id={'r' + index} />
          <Label htmlFor={'r' + index} className="text-text">
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
