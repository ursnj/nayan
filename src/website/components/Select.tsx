import { NSelect } from '@/components/NSelect';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { selectCode } from '../services/CodeBlocks';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Select = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Select</div>
      <div className="mb-5">Displays a list of options for the user to pick from—triggered by a button.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NSelect selected={selected} placeholder="Select Business" label="Business Type" title="Select Type" items={items} onChange={setSelected} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={selectCode} />
    </Sidebar>
  );
};

export default Select;
