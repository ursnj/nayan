import React from 'react';
import { NButton } from '@/components/NButton';
import { NPopover } from '@/components/NPopover';
import { PopoverSize } from '@/components/Types';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { popoverCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { popoverAttributes } from '@/website/services/Attributes';

const Popover = () => {
  return (
    <Sidebar title="Popover">
      <div className="mb-5">Displays rich content in a portal, triggered by a button.</div>

      <SubHeader title="Demo">
        <NPopover align="start" size={PopoverSize.MD} trigger={<NButton>Show Popover</NButton>}>
          <div className="overflow-hidden p-3">
            <div className="text-sm font-medium text-text">Documentation</div>
            <div className="text-sm text-muted">Start integrating products and tools</div>
          </div>
        </NPopover>
      </SubHeader>

      <Attributes data={popoverAttributes} />

      <SubHeader title="Usage">
        <Code code={popoverCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Popover;
