import { useState } from 'react';
import { NRadioGroup } from '../components/NRadioGroup';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroupExample = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Radio Group Horizontal:</h1>
      <NRadioGroup items={items} selected={selected} setSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="text-text mb-3 text-lg">Radio Group Vertical:</h1>
      <NRadioGroup orientation="vertical" items={items} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default RadioGroupExample;
