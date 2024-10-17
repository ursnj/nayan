import React, { useState } from 'react';
import { NButton } from '@/components/NButton';
import { NConfirmAlert } from '@/components/NConfirmAlert';
import ComponentWrapper from '../helpers/ComponentWrapper';

const ConfirmAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentWrapper>
      <NConfirmAlert
        isOpen={isOpen}
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onResult={result => console.log('Alert Clicked', result)}
        onClose={() => setIsOpen(false)}
      />
      <NButton onClick={() => setIsOpen(true)}>Show Alert</NButton>
    </ComponentWrapper>
  );
};

export default ConfirmAlert;
