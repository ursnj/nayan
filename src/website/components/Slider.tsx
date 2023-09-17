import { NSlider } from '@/components/NSlider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sliderCode } from '../services/CodeBlocks';

const Slider = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Slider</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NSlider defaultValue={50} max={100} step={1} isDisabled={false} onChange={(value: number) => console.log(value)} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={sliderCode} />
    </Sidebar>
  );
};

export default Slider;
