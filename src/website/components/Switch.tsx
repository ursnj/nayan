import { NSwitch } from '@/components/NSwitch';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { switchCode } from '../services/CodeBlocks';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Sidebar title="Switch">
      <div className="mb-5">A control that allows the user to toggle between checked and not checked.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NSwitch enabled={enabled} onChange={setEnabled} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={switchCode} />
    </Sidebar>
  );
};

export default Switch;
