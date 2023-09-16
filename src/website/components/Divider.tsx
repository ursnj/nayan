import { NDivider } from '@/components/NDivider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dividerCode } from '../services/CodeBlocks';

const Checkbox = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Checkbox</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
      <NDivider className="my-3" />
      <h1 className="text-text mb-3 text-lg">Vertical:</h1>
      <NDivider orientation="vertical" className="h-5" />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={dividerCode} />
    </Sidebar>
  );
};

export default Checkbox;
