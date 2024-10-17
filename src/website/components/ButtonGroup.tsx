import React, { useState } from 'react';
import { NButtonGroup } from '@/components/NButtonGroup';
import ComponentWrapper from '../helpers/ComponentWrapper';

const items = ['Startup', 'Business', 'Enterprise'];

const ButtonGroup = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <ComponentWrapper>
      <NButtonGroup disabled={false} items={items} selected={selected} onChange={setSelected} />
    </ComponentWrapper>
  );
};

export default ButtonGroup;
