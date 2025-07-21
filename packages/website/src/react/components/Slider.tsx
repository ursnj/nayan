import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NSlider } from 'nayan';

const Slider = () => {
  return (
    <ComponentWrapper>
      <NSlider label="Select range" defaultValue={50} max={100} step={1} disabled={false} onChange={(value: number) => console.log(value)} />
    </ComponentWrapper>
  );
};

export default Slider;
