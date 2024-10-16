import React, { useState } from 'react';
import { NButton } from '@/components/NButton';
import { NDialog } from '@/components/NDialog';
import { DialogSize } from '@/components/Types';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dialogCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { dialogAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar title="Dialog">
      <Meta title="Dialog" />
      <div className="mb-5">
        A Dialog component is a UI element that displays a pop-up window over the main content to capture user attention or request input. It is often
        used for tasks like confirmations, alerts, forms, or other interactions that require user feedback before proceeding. Dialogs can include
        buttons like "OK" or "Cancel" to confirm or dismiss actions, and typically block interaction with the underlying content until closed.
      </div>

      <SubHeader title="Demo">
        <NDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size={DialogSize.MD} title="Payment confirmation" contentClassName="p-3">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </NDialog>
        <NButton onClick={() => setIsOpen(true)}>Show Dialog</NButton>
      </SubHeader>

      <Attributes data={dialogAttributes} />

      <SubHeader title="Usage">
        <Code code={dialogCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Dialog;
