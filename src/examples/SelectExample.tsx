import { useState } from 'react';
import { NSelect } from '@/components/NSelect';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const SelectExample = () => {
  const [selected, setSelected] = useState(items[0].value);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Select:</h1>
      <NSelect selected={selected} placeholder="Select Business" label="Business Type" title="Select Type" items={items} onChange={setSelected} />
    </div>
  );
};

export default SelectExample;
