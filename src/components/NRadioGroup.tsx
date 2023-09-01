import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Props {
  orientation?: 'horizontal' | 'vertical';
  items: { label: string; value: string }[];
  isDisabled?: boolean;
  selected: string;
  setSelected: (selected: string) => void;
}

export const NRadioGroup = (props: Props) => {
  const { items, selected, setSelected, orientation = 'horizontal', isDisabled = false } = props;

  return (
    <RadioGroup
      orientation={orientation}
      defaultValue={selected}
      value={selected}
      disabled={isDisabled}
      onValueChange={setSelected}
      className={`${orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col'}`}>
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
