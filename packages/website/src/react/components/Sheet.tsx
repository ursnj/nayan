import React, { useState } from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NButton, NSheet, SheetSize } from '@nayan-ui/react';

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentWrapper>
      <NButton onClick={() => setIsOpen(true)}>Show Sheet</NButton>
      <NSheet isOpen={isOpen} size={SheetSize.SM} title="Edit Profile" onCloseSheet={() => setIsOpen(false)}>
        <div className="w-full h-full p-3">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </div>
      </NSheet>
    </ComponentWrapper>
  );
};

export default Sheet;
