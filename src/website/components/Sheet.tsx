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

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar title="Sheet">
      <div className="mb-5">Extends the Dialog component to display content that complements the main content of the screen.</div>

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
