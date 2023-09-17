import { NButton } from '@/components/NButton';
import { NPopover } from '@/components/NPopover';
import { Size } from '@/components/Types';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { popoverCode } from '../services/CodeBlocks';

const Popover = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Popover</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NPopover align="start" size={Size.MD} trigger={<NButton>Show Popover</NButton>}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium text-text">Documentation</div>
          <div className="text-sm text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={popoverCode} />
    </Sidebar>
  );
};

export default Popover;
