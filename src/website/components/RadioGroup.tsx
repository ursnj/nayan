import React, { useState } from 'react';
import { NRadioGroup } from '@/components/NRadioGroup';
import ComponentWrapper from '../helpers/ComponentWrapper';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroup = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <ComponentWrapper>
      <h1 className="text-text mb-3 text-base">Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} onChange={setSelected} />
      <div className="mt-3" />
      <h1 className="text-text mb-3 text-base">Vertical:</h1>
      <NRadioGroup orientation="vertical" items={items} selected={selected} onChange={setSelected} />
    </ComponentWrapper>
  );
};

export default RadioGroup;
