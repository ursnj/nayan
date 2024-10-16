import React from 'react';
import { NSlider } from '@/components/NSlider';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sliderCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { sliderAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Slider = () => {
  return (
    <Sidebar title="Slider">
      <Meta title="Slider" />
      <div className="mb-5">
        A Slider component is a UI element that allows users to select a value from a range by sliding a handle along a track. It provides an
        interactive way to adjust settings, such as volume, brightness, or other continuous values, with smooth transitions. Sliders can be single or
        multi-valued, enabling users to make precise selections visually, enhancing the overall user experience.
      </div>

      <SubHeader title="Demo">
        <NSlider label="Select range" defaultValue={50} max={100} step={1} disabled={false} onChange={(value: number) => console.log(value)} />
      </SubHeader>

      <Attributes data={sliderAttributes} />

      <SubHeader title="Usage">
        <Code code={sliderCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Slider;
