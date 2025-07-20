import React from 'react';
import { NButton } from '@/components/NButton';
import { NTooltip } from '@/components/NTooltip';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Tooltip = () => {
  return (
    <ComponentWrapper>
      <NTooltip message="This is sample tool tip!">
        <NButton>Hover to show Tooltip</NButton>
      </NTooltip>
    </ComponentWrapper>
  );
};

export default Tooltip;
