import React, { useState } from 'react';
import { NSwitch } from '@/components/NSwitch';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { switchCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { switchAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Sidebar title="Switch">
      <Meta title="Switch" />
      <div className="mb-5">A control that allows the user to toggle between checked and not checked.</div>

      <SubHeader title="Demo">
        <NSwitch label="Is Dark Mode" enabled={enabled} onChange={setEnabled} />
      </SubHeader>

      <Attributes data={switchAttributes} />

      <SubHeader title="Usage">
        <Code code={switchCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Switch;
