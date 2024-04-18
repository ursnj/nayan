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
        A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
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
