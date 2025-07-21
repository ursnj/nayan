import React, { useState } from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NSelect } from 'nayan';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Select = () => {
  const [selected, setSelected] = useState(items[0]);
  const [mSelected, setMSelected] = useState([items[0]]);

  const handleCreateOption = (value: string) => {
    setSelected([...mSelected, { value, label: value }] as any);
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
      <h2 className="text-lg mb-3">Creatable Select Demo</h2>
      <NSelect
        isCreatable={true}
        isMulti={false}
        label="Choose Business type"
        placeholder="Select something..."
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        value={selected}
        options={items}
        onCreateOption={handleCreateOption}
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
        value={mSelected}
        options={items}
        onChangeOptions={(values: any) => setMSelected(values)}
      />

      <div className="text-primary mb-5">
        Note: this component is created on top of react-select library, for more customizations you can directly use it.
      </div>
    </ComponentWrapper>
  );
};

export default Select;
