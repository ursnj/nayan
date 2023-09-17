import { NLinkify } from '@/components/NLinkify';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { linkifyCode } from '../services/CodeBlocks';

const Linkify = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Linkify</div>
      <div className="mb-5">A component to elivate links, phone numbers and fax.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NLinkify>Checkout our new landing page at nayanui.com and new email hello@nayanui.com</NLinkify>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={linkifyCode} />
    </Sidebar>
  );
};

export default Linkify;
