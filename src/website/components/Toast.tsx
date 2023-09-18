import { NButton } from '@/components/NButton';
import { useToast } from '@/components/NToast';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { toastCode } from '../services/CodeBlocks';

const Toast = () => {
  const toast = useToast();

  return (
    <Sidebar title="Toast">
      <div className="mb-5">A succinct message that is displayed temporarily.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NButton onClick={() => toast('Simple Toaster!')}>Show Simple Toast</NButton>
      <NButton className="ml-5" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
        Show Toast with Title
      </NButton>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={toastCode} />
    </Sidebar>
  );
};

export default Toast;
