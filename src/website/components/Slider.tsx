import { NSlider } from '@/components/NSlider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sliderCode } from '../services/CodeBlocks';

const Slider = () => {
  return (
    <Sidebar title="Slider">
      <div className="mb-5">An input where the user selects a value from within a given range.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NSlider defaultValue={50} max={100} step={1} isDisabled={false} onChange={(value: number) => console.log(value)} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={sliderCode} />
    </Sidebar>
  );
};

export default Slider;
