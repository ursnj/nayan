import { NButtonGroup } from '@/components/NButtonGroup';
import { useState } from 'react';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const ButtonGroupExample = () => {
  const [selected, setSelected] = useState(items[0].value);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Button Group:</h1>
      <NButtonGroup items={items} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default ButtonGroupExample;
