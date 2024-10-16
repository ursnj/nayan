import { NAlert } from '@/components/NAlert';
import { AlertTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { alertCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { alertAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Alert = () => {
  return (
    <Sidebar title="Alert">
      <Meta title="Alert" />
      <div className="mb-5">
        An Alert component is a UI element used to display important messages or notifications to users. It can convey different types of information
        such as success, warning, error, or informational messages, typically styled with distinct colors and icons to highlight the message's
        significance. Alerts are often used to grab the user's attention and provide immediate feedback on actions or events.
      </div>

      <SubHeader title="Demo">
        <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
        <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
        <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
        <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
        <NAlert
          type={AlertTypes.ERROR}
          title="Error!"
          message="New version available!"
          className="mb-3"
          onClose={() => console.log('Alert closed')}
        />
      </SubHeader>

      <Attributes data={alertAttributes} />

      <SubHeader title="Usage">
        <Code code={alertCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Alert;
