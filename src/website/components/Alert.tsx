import { NAlert } from '@/components/NAlert';
import { AlertTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { alertCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { alertAttributes } from '@/website/services/Attributes';

const Alert = () => {
  return (
    <Sidebar title="Alert">
      <div className="mb-5">Displays a callout for user attention.</div>

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
