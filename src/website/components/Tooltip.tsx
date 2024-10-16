import React from 'react';
import { NButton } from '@/components/NButton';
import { NTooltip } from '@/components/NTooltip';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tooltipCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { tooltipAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Tooltip = () => {
  return (
    <Sidebar title="Tooltip">
      <Meta title="Tooltip" />
      <div className="mb-5">
        A Tooltip component is a small, informative pop-up that appears when a user hovers over or focuses on an element, such as a button or icon. It
        provides additional context or explanations about that element without cluttering the interface. Tooltips enhance user experience by offering
        helpful hints, instructions, or details, ensuring that information is accessible without overwhelming the layout.
      </div>

      <SubHeader title="Demo">
        <NTooltip message="This is sample tool tip!">
          <NButton>Hover to show Tooltip</NButton>
        </NTooltip>
      </SubHeader>

      <Attributes data={tooltipAttributes} />

      <SubHeader title="Usage">
        <Code code={tooltipCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Tooltip;
