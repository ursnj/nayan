import React from 'react';
import { NSlider } from '@/components/NSlider';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Slider = () => {
  return (
    <ComponentWrapper>
      <NSlider label="Select range" defaultValue={50} max={100} step={1} disabled={false} onChange={(value: number) => console.log(value)} />
    </ComponentWrapper>
  );
};

export default Slider;
