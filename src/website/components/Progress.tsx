import { NProgress } from '@/components/NProgress';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { progressCode } from '../services/CodeBlocks';

const Checkbox = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Progress</div>
      <div className="mb-5">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NProgress value={50} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={progressCode} />
    </Sidebar>
  );
};

export default Checkbox;
