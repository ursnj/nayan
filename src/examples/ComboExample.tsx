import { NCombo } from '@/components/NCombo';
import { useState } from 'react';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const ComboExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0].value);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Combo Box:</h1>
      <NCombo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        placeholder="Select Business"
        label="Business Type"
        items={items}
        onChange={setSelected}
      />
    </div>
  );
};

export default ComboExample;
