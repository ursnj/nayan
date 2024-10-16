import React, { useState } from 'react';
import { NButton } from '@/components/NButton';
import { NConfirmAlert } from '@/components/NConfirmAlert';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { confirmAlertCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { confirmAlertAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const ConfirmAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar title="Confirm Alert">
      <Meta title="Confirm Alert" />
      <div className="mb-5">
        A Confirm Alert component is a UI element that prompts users to confirm or cancel an action before proceeding. It typically displays a message
        asking for confirmation, along with "Confirm" and "Cancel" buttons, ensuring that the user consciously approves or rejects the action, often
        used for critical tasks like deletions or irreversible changes.
      </div>

      <SubHeader title="Demo">
        <NConfirmAlert
          isOpen={isOpen}
          title="Are you absolutely sure?"
          message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          onResult={result => console.log('Alert Clicked', result)}
          onClose={() => setIsOpen(false)}
        />
        <NButton onClick={() => setIsOpen(true)}>Show Alert</NButton>
      </SubHeader>

      <Attributes data={confirmAlertAttributes} />

      <SubHeader title="Usage">
        <Code code={confirmAlertCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default ConfirmAlert;
