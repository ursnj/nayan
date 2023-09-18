import { NButton } from '@/components/NButton';
import { NTooltip } from '@/components/NTooltip';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tooltipCode } from '../services/CodeBlocks';

const Tooltip = () => {
  return (
    <Sidebar title="Tooltip">
      <div className="mb-5">
        A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
      </div>

      <div className="text-xl mb-5"># Demo</div>
      <NTooltip message="This is sample tool tip! This is sample tool tip This is sample tool tip This is sample tool tip ">
        <NButton>Hover to show Tooltip</NButton>
      </NTooltip>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={tooltipCode} />
    </Sidebar>
  );
};

export default Tooltip;
