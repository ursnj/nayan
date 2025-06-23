import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Label } from './ui/label';

interface Props {
  className?: string;
  labelClassName?: string;
  sliderClassName?: string;
  label?: string;
  defaultValue?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export const NSlider = (props: Props) => {
  const { className = '', labelClassName = '', sliderClassName = '', label = '', defaultValue = 0, max = 100, step = 1, disabled = false } = props;
  return (
    <div className={cn(`nyn-select-block mb-3 ${className}`)}>
      {label && (
        <Label htmlFor="select" className={cn(`nyn-select-label block pb-4 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      <Slider
        defaultValue={[defaultValue]}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={value => props.onChange(value[0])}
        className={cn(`nyn-slider bg-border rounded  ${sliderClassName}`)}
      />
    </div>
  );
};
