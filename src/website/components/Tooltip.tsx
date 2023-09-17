import { NButton } from '@/components/NButton';
import { NTooltip } from '@/components/NTooltip';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tooltipCode } from '../services/CodeBlocks';

const Tooltip = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Tooltip</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

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
