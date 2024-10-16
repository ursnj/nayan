import { NButton } from '@/components/NButton';
import { useToast } from '@/components/NToast';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { toastCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { toastAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Toast = () => {
  const toast = useToast();

  return (
    <Sidebar title="Toast">
      <Meta title="Toast" />
      <div className="mb-5">
        A Toast component is a transient notification that appears on the screen to provide feedback or information to users without interrupting
        their workflow. Typically displayed at the top or bottom of the screen, toasts are brief messages that automatically disappear after a short
        duration. They are commonly used to inform users about actions such as successful submissions, updates, or alerts, enhancing the overall user
        experience with minimal disruption.
      </div>

      <SubHeader title="Demo">
        <NButton onClick={() => toast('Simple Toaster!')}>Show Simple Toast</NButton>
        <NButton className="ml-5" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
          Show Toast with Title
        </NButton>
      </SubHeader>

      <Attributes data={toastAttributes} />

      <SubHeader title="usage">
        <Code code={toastCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Toast;
