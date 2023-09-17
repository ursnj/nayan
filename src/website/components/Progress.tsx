import { NProgress } from '@/components/NProgress';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { progressCode } from '../services/CodeBlocks';

const Checkbox = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Progress</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NProgress value={50} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={progressCode} />
    </Sidebar>
  );
};

export default Checkbox;
