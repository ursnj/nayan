import React from 'react';
import { NButton } from '@/components/NButton';
import { useToast } from '@/components/NToast';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Toast = () => {
  const toast = useToast();

  return (
    <ComponentWrapper>
      <NButton onClick={() => toast('Simple Toaster!')}>Show Simple Toast</NButton>
      <NButton className="ml-5" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
        Show Toast with Title
      </NButton>
    </ComponentWrapper>
  );
};

export default Toast;
