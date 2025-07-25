import React, { useState } from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { DialogSize, NButton, NDialog } from '@nayan-ui/react';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentWrapper>
      <NDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size={DialogSize.MD} title="Payment confirmation" contentClassName="p-3">
        Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
      </NDialog>
      <NButton onClick={() => setIsOpen(true)}>Show Dialog</NButton>
    </ComponentWrapper>
  );
};

export default Dialog;
