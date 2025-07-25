import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NButton, NPopover, PopoverSize } from '@nayan-ui/react';

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
