import { NSelect } from '@/components/NSelect';
import { useState } from 'react';

const items = [
  { value: '1', label: 'Startup' },
  { value: '2', label: 'Business' },
  { value: '3', label: 'Enterprise' }
];

const CardExample = () => {
  const [selected, setSelected] = useState(items[0].value);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Select:</h1>
      <NSelect selected={selected} placeholder="Select Business" label="Business Type" title="Select Type" items={items} onChange={setSelected} />
    </div>
  );
};

export default CardExample;
