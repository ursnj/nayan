import React, { useState } from 'react';
import { NSelect } from '@/components/NSelect';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { selectCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { selectAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const Select = () => {
  const [selected, setSelected] = useState(items[0]);

  const handleCreateOption = (value: string) => {
    setSelected(prev => [...prev, { value, label: value }] as any);
  };

  return (
    <Sidebar title="Select">
      <Meta title="Select" />
      <div className="mb-5">
        A Select or ComboBox component is a UI element that allows users to choose one or more options from a dropdown list. It typically displays a
        default value or prompt, and when clicked, it expands to show a list of available choices. Users can either select an option from the list or,
        in the case of a ComboBox, input custom values. This component is ideal for conserving space in forms and making it easy for users to make
        selections quickly.
      </div>

      <SubHeader title="Select Demo">
        <NSelect
          isMulti={false}
          placeholder="Select something..."
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          value={selected}
          options={items}
          onChangeOptions={values => setSelected(values)}
        />
      </SubHeader>

      <SubHeader title="Combobox Demo">
        <NSelect
          isMulti={true}
          placeholder="Select something..."
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          value={selected}
          options={items}
          onChangeOptions={values => setSelected(values)}
        />
      </SubHeader>

      <SubHeader title="Creatable Select Demo">
        <NSelect
          isMulti={true}
          isCreatable={true}
          placeholder="Select something..."
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          value={selected}
          options={items}
          onCreateOptions={handleCreateOption}
          onChangeOptions={values => setSelected(values)}
        />
      </SubHeader>

      <Attributes data={selectAttributes} />

      <div className="text-primary mb-5">
        Note: this component is created on top of react-select library, for more customizations you can directly use it.
      </div>

      <SubHeader title="Usage">
        <Code code={selectCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Select;
