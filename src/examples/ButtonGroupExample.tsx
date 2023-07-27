import { useState } from 'react';
import { NButtonGroup } from '@/components/NButtonGroup';

const items = ['Startup', 'Business', 'Enterprise'];

const ButtonGroupExample = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Button Group:</h1>
      <NButtonGroup items={items} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default ButtonGroupExample;
