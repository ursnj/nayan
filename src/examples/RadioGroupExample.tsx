import { useState } from 'react';
import { NJRadioGroup } from '../components/NJRadioGroup';

const items = [
  { id: '1', label: 'Startup' },
  { id: '2', label: 'Business' },
  { id: '3', label: 'Enterprise' }
];

const RadioGroupExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState(items[0]);

  return (
    <>
      <h1 className="text mb-3 text-lg">Radio Group Horizontal:</h1>
      <NJRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="text mb-3 text-lg">Radio Group Vertical:</h1>
      <NJRadioGroup isVertical={true} items={items} selected={selected1} setSelected={setSelected1} />
    </>
  );
};

export default RadioGroupExample;
