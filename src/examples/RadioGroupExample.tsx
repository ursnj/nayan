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
      <NJRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <NJRadioGroup isVertical={true} items={items} selected={selected1} setSelected={setSelected1} />
    </>
  );
};

export default RadioGroupExample;
