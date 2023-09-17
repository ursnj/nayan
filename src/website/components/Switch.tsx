import { NSwitch } from '@/components/NSwitch';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { switchCode } from '../services/CodeBlocks';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Switch</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NSwitch enabled={enabled} onChange={setEnabled} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={switchCode} />
    </Sidebar>
  );
};

export default Switch;
