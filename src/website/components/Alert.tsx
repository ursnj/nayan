import { NAlert } from '@/components/NAlert';
import { AlertTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { alertCode } from '../services/CodeBlocks';

const Alert = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Alert</div>
      <div className="mb-5">Displays a callout for user attention.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.ERROR} title="Error!" message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={alertCode} />
    </Sidebar>
  );
};

export default Alert;
