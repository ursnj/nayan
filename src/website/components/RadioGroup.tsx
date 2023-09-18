import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import { NRadioGroup } from '@/components/NRadioGroup';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { radioGroupCode } from '../services/CodeBlocks';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroup = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Sidebar title="Radio Group">
      <div className="mb-5">A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</div>

      <div className="text-xl mb-5"># Demo</div>
      <h1 className="text-text mb-3 text-base">Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="text-text mb-3 text-base">Vertical:</h1>
      <NRadioGroup orientation="vertical" items={items} selected={selected} setSelected={setSelected} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={radioGroupCode} />
    </Sidebar>
  );
};

export default RadioGroup;
