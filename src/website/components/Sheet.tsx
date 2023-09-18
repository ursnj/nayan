import { NButton } from '@/components/NButton';
import { NSheet } from '@/components/NSheet';
import { Size } from '@/components/Types';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sheetCode } from '../services/CodeBlocks';

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar title="Sheet">
      <div className="mb-5">Extends the Dialog component to display content that complements the main content of the screen.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NButton onClick={() => setIsOpen(true)}>Show Sheet</NButton>
      <NSheet isOpen={isOpen} size={Size.SM} title="Edit Profile" onCloseSheet={() => setIsOpen(false)}>
        <div className="w-full h-full p-3">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </div>
      </NSheet>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={sheetCode} />
    </Sidebar>
  );
};

export default Sheet;
