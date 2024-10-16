import { NDivider } from '@/components/NDivider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dividerCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { dividerAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Divider = () => {
  return (
    <Sidebar title="Divider">
      <Meta title="Divider" />
      <div className="mb-5">
        A Divider component is a simple UI element used to separate content within a layout, creating visual distinction between sections. It helps
        enhance the organization and readability of the interface by providing clear boundaries between different elements, such as text blocks,
        images, or other components. Dividers can be styled in various ways (solid, dashed, or dotted) and can vary in thickness and color to match
        the overall design of the application.
      </div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
        <NDivider className="my-3" />
        <h1 className="text-text mb-3 text-lg">Vertical:</h1>
        <NDivider orientation="vertical" className="h-5" />
      </SubHeader>

      <Attributes data={dividerAttributes} />

      <SubHeader title="Usage">
        <Code code={dividerCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Divider;
