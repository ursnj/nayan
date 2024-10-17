import React from 'react';
import { NButton } from '@/components/NButton';
import { NPopover } from '@/components/NPopover';
import { PopoverSize } from '@/components/Types';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Popover = () => {
  return (
    <ComponentWrapper>
      <NPopover align="start" size={PopoverSize.MD} trigger={<NButton>Show Popover</NButton>}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium text-text">Documentation</div>
          <div className="text-sm text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>
    </ComponentWrapper>
  );
};

export default Popover;
