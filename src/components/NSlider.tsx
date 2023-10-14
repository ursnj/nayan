import { Slider } from '@/components/ui/slider';

interface Props {
  className?: string;
  defaultValue?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export const NSlider = (props: Props) => {
  const { className = '', defaultValue = 0, max = 100, step = 1, disabled = false } = props;
  return (
    <Slider
      defaultValue={[defaultValue]}
      max={max}
      step={step}
      disabled={disabled}
      onValueChange={value => props.onChange(value[0])}
      className={`nyn-slider bg-border rounded  ${className}`}
    />
  );
};
