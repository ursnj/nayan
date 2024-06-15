import { NButtonGroup } from '@/components/NButtonGroup';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { buttonGroupCode } from '../services/CodeBlocks';
import Attributes from '@/website/helpers/Attributes';
import { buttonGroupAttributes } from '@/website/services/Attributes';
import SubHeader from '@/website/helpers/SubHeader';
import Meta from '@/website/helpers/Meta';

const items = ['Startup', 'Business', 'Enterprise'];

const ButtonGroup = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Sidebar title="Button Group">
      <Meta title="Button Group" />
      <div className="mb-5">Displays a group of buttons that looks like a button group.</div>

      <SubHeader title="Demo">
        <NButtonGroup disabled={false} items={items} selected={selected} onChange={setSelected} />
      </SubHeader>

      <Attributes data={buttonGroupAttributes} />

      <SubHeader title="Usage">
        <Code code={buttonGroupCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default ButtonGroup;
