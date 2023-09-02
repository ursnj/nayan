import { NCard } from '@/components/NCard';
import { NSlider } from '@/components/NSlider';

const SliderExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Slider:</h1>
      <NSlider defaultValue={50} max={100} step={1} />
    </div>
  );
};

export default SliderExample;
