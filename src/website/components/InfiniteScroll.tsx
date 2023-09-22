import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { checkBoxCode } from '../services/CodeBlocks';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Sidebar title="Checkbox">
      <div className="mb-5">A component to load more data when user scroll on the screen.</div>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={checkBoxCode} />

      <div className="text-xl mb-5"># Demo</div>
      <NCheck isChecked={isChecked} onChange={(checked: boolean) => setIsChecked(checked)}>
        Sample label for checkbox. accept <NLink> terms</NLink>
      </NCheck>
    </Sidebar>
  );
};

export default Checkbox;
