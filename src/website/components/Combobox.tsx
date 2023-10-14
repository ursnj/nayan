import React, { useState } from 'react';
import { NCombo } from '@/components/NCombo';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { comboBoxCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { comboAttributes } from '@/website/services/Attributes';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Combobox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Sidebar title="Combobox">
      <div className="mb-5">Autocomplete input and command palette with a list of suggestions.</div>

      <SubHeader title="Demo">
        <NCombo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selected={selected}
          placeholder="Select Business"
          label="Business Type"
          items={items}
          onChange={setSelected}
        />
      </SubHeader>

      <Attributes data={comboAttributes} />

      <SubHeader title="Usage">
        <Code code={comboBoxCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Combobox;
