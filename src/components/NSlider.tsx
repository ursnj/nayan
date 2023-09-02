import { Slider } from '@/components/ui/slider';

interface Props {
  className?: string;
  defaultValue?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
}

export const NSlider = (props: Props) => {
  const { className = '', defaultValue = 0, max = 100, step = 1, isDisabled = false } = props;
  return (
    <Slider defaultValue={[defaultValue]} max={max} step={step} disabled={isDisabled} className={`nyn-slider bg-border rounded  ${className}`} />
  );
};
