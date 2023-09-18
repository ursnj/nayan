import { NDivider } from '@/components/NDivider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dividerCode } from '../services/CodeBlocks';

const Divider = () => {
  return (
    <Sidebar title="Divider">
      <div className="mb-5">Visually or semantically separates content.</div>

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

export default Divider;
