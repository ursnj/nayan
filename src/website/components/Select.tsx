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

  return (
    <Sidebar title="Select">
      <Meta title="Select" />
      <div className="mb-5">Displays a list of options for the user to pick from—triggered by a button.</div>

      <SubHeader title="Demo">
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

      <Attributes data={selectAttributes} />

      <SubHeader title="Usage">
        <Code code={selectCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Select;
