import { NButton } from '@/components/NButton';
import { NDialog } from '@/components/NDialog';
import { Size } from '@/components/Types';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dialogCode } from '../services/CodeBlocks';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Dialog</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NDialog isOpen={isOpen} closeModal={() => setIsOpen(false)} size={Size.MD} title="Payment confirmation">
        Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
      </NDialog>
      <NButton onClick={() => setIsOpen(true)}>Show Dialog</NButton>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={dialogCode} />
    </Sidebar>
  );
};

export default Dialog;
