import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NButton, useNToast, showToast } from 'nayan';

const Toast = () => {
  const toast = useNToast();

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
