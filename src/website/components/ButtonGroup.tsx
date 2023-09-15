import { NButtonGroup } from '@/components/NButtonGroup';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { buttonGroupCode } from '../services/CodeBlocks';

const items = ['Startup', 'Business', 'Enterprise'];

const ButtonGroup = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Button Group</div>
      <div className="mb-5">Displays a badge or a component that looks like a badge.</div>
      <div className="text-xl mb-5">Usage</div>
      <Code code={buttonGroupCode} />
      <div className="text-xl mb-5">Demo</div>
      <NButtonGroup items={items} selected={selected} setSelected={setSelected} />
    </Sidebar>
  );
};

export default ButtonGroup;
