import { NAccordion } from '@/components/NAccordion';
import { NAlert } from '@/components/NAlert';
import { NCard } from '@/components/NCard';
import { AccordionTypes, AlertTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { accordionCode, alertCode, appCode, cssCode, installCode, tailwindCode } from '../services/CodeBlocks';

const Alert = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Alert</div>
      <div className="mb-5">Displays a callout for user attention.</div>
      <div className="text-xl mb-5">Usage</div>
      <Code code={alertCode} />
      <div className="text-xl mb-5">Demo</div>
      <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.ERROR} title="Error!" message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
    </Sidebar>
  );
};

export default Alert;
