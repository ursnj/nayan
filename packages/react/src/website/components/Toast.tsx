import React from 'react';
import { NButton } from '@/components/NButton';
import { showToast, useToast } from '@/components/NToast';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Toast = () => {
  const toast = useToast();

  return (
    <ComponentWrapper>
      <NButton onClick={() => showToast('Simple Toaster!')}>Show Simple Toast with Function</NButton>
      <NButton className="ml-3" onClick={() => toast('Simple Toaster!')}>
        Show Simple Toast
      </NButton>
      <NButton className="ml-3" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
        Show Toast with Title
      </NButton>
    </ComponentWrapper>
  );
};

export default Toast;
