import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { checkBoxCode } from '../services/CodeBlocks';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Checkbox</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>
      <div className="text-xl mb-5">Demo</div>
      <NCheck isChecked={isChecked} onChange={(checked: boolean) => setIsChecked(checked)}>
        Sample label for checkbox. accept <NLink> terms</NLink>
      </NCheck>
      <div className="text-xl mb-5 mt-5">Usage</div>
      <Code code={checkBoxCode} />
    </Sidebar>
  );
};

export default Checkbox;