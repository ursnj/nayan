import { useState } from 'react';
import { NRadioGroup } from '../components/NRadioGroup';

const items = [
  { id: '1', label: 'Startup' },
  { id: '2', label: 'Business' },
  { id: '3', label: 'Enterprise' }
];

const RadioGroupExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState(items[0]);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Radio Group Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Radio Group Vertical:</h1>
      <NRadioGroup isVertical={true} items={items} selected={selected1} setSelected={setSelected1} />
    </div>
  );
};

export default RadioGroupExample;
