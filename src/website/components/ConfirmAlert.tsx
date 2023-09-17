import { NButton } from '@/components/NButton';
import { NCheck } from '@/components/NCheck';
import { NConfirmAlert } from '@/components/NConfirmAlert';
import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { confirmAlertCode } from '../services/CodeBlocks';

const ConfirmAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Confirm Alert</div>
      <div className="mb-5">A modal dialog that interrupts the user with important content and expects a response.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NConfirmAlert
        isOpen={isOpen}
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onResult={result => console.log('Alert Clicked', result)}
        onClose={() => setIsOpen(false)}
      />
      <NButton onClick={() => setIsOpen(true)}>Show Alert</NButton>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={confirmAlertCode} />
    </Sidebar>
  );
};

export default ConfirmAlert;
