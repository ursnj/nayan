import { NCheck } from '@/components/NCheck';
import { NCombo } from '@/components/NCombo';
import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { comboBoxCode } from '../services/CodeBlocks';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Combobox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Combobox</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NCombo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        placeholder="Select Business"
        label="Business Type"
        items={items}
        onChange={setSelected}
      />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={comboBoxCode} />
    </Sidebar>
  );
};

export default Combobox;
