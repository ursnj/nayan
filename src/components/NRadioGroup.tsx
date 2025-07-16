import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { RadioItem } from '@/components/Types';
import { cn } from '@/lib/utils';

interface Props {
  orientation?: 'horizontal' | 'vertical';
  items: RadioItem[];
  className?: boolean;
  id?: string;
  label?: string;
  itemClassName?: boolean;
  radioClassName?: boolean;
  labelClassName?: boolean;
  disabled?: boolean;
  selected: string;
  onChange: (selected: string) => void;
}

export const NRadioGroup = (props: Props) => {
  const {
    items,
    selected,
    onChange,
    orientation = 'horizontal',
    id = 'radio-group',
    label = '',
    className = '',
    itemClassName = '',
    radioClassName = '',
    labelClassName = '',
    disabled = false
  } = props;

  return (
    <div className={cn(`nyn-radio-block mb-3 ${className}`)}>
      {label && (
        <Label htmlFor={id} className={cn(`nyn-radio-label block pb-2 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      <RadioGroup
        orientation={orientation}
        defaultValue={selected}
        value={selected}
        disabled={disabled}
        onValueChange={onChange}
        className={cn(`${orientation === 'horizontal' ? 'flex flex-row flex-wrap' : 'flex flex-col'} ${className}`)}>
        {items.map((item, index) => (
          <div key={index} className={cn(`flex items-center space-x-2 ${itemClassName}`)}>
            <RadioGroupItem className={'' + radioClassName} value={item.value} id={'r' + index} />
            <Label htmlFor={'radio-' + index} className={cn(`text-text ${labelClassName}`)}>
              {item.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
