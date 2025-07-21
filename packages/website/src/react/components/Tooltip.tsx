import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NButton, NTooltip } from 'nayan';

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
