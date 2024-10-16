import React, { useState } from 'react';
import { NButton } from '@/components/NButton';
import { NSheet } from '@/components/NSheet';
import { SheetSize } from '@/components/Types';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { sheetCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { sheetAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar title="Sheet">
      <Meta title="Sheet" />
      <div className="mb-5">
        A Sheet component is a UI element that presents content in a sliding panel, often overlaying the main application interface. It is typically
        used for displaying additional information, forms, or actions without navigating away from the current view. Sheets can be swiped or tapped to
        expand or collapse, providing a clean and efficient way to manage user interactions and maintain focus on the main content.
      </div>

      <SubHeader title="Demo">
        <NButton onClick={() => setIsOpen(true)}>Show Sheet</NButton>
        <NSheet isOpen={isOpen} size={SheetSize.SM} title="Edit Profile" onCloseSheet={() => setIsOpen(false)}>
          <div className="w-full h-full p-3">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </div>
        </NSheet>
      </SubHeader>

      <Attributes data={sheetAttributes} />

      <SubHeader title="Usage">
        <Code code={sheetCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Sheet;
