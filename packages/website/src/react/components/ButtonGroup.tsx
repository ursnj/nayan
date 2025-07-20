import React, { useState } from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NButtonGroup } from 'nayan';

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
