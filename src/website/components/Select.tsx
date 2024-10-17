import React, { useState } from 'react';
import { NSelect } from '@/components/NSelect';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { selectCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { selectAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';
import ComponentWrapper from '../helpers/ComponentWrapper';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Select = () => {
  const [selected, setSelected] = useState(items[0]);

  const handleCreateOption = (value: string) => {
    setSelected((prev: any) => [...prev, { value, label: value }] as any);
  };

  return (
    <ComponentWrapper>
      <h2 className="text-lg mb-3">Select Demo</h2>
      <NSelect
        isMulti={false}
        label="Choose Business type"
        placeholder="Select something..."
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        value={selected}
        options={items}
        onChangeOptions={(values: any) => setSelected(values)}
      />
      <h2 className="text-lg mb-3">Combo Box Demo</h2>
      <NSelect
        isMulti={true}
        label="Choose Business type"
        placeholder="Select something..."
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        value={selected}
        options={items}
        onChangeOptions={(values: any) => setSelected(values)}
      />

      <div className="text-primary mb-5">
        Note: this component is created on top of react-select library, for more customizations you can directly use it.
      </div>
    </ComponentWrapper>
  );
};

export default Select;
