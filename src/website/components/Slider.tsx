import React from 'react';
import { NSlider } from '@/components/NSlider';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sliderCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { sliderAttributes } from '@/website/services/Attributes';

const Slider = () => {
  return (
    <Sidebar title="Slider">
      <div className="mb-5">An input where the user selects a value from within a given range.</div>

      <SubHeader title="Demo">
        <NSlider defaultValue={50} max={100} step={1} disabled={false} onChange={(value: number) => console.log(value)} />
      </SubHeader>

      <Attributes data={sliderAttributes} />

      <SubHeader title="Usage">
        <Code code={sliderCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Slider;
