import React from 'react';
import { NLinkify } from '@/components/NLinkify';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { linkifyCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { linkifyAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Linkify = () => {
  return (
    <Sidebar title="Linkify">
      <Meta title="Linkify" />
      <div className="mb-5">
        A Linkify component is a UI tool that automatically detects and converts plain text URLs within a content area into clickable hyperlinks. This
        enhances user experience by allowing easy access to external resources without the need for manual formatting. Linkify typically recognizes
        various URL formats and ensures that they are presented in a visually distinct manner, making navigation seamless and intuitive.
      </div>

      <SubHeader title="Demo">
        <NLinkify>Checkout our new landing page at nayanui.com and new email hello@nayanui.com</NLinkify>
      </SubHeader>

      <Attributes data={linkifyAttributes} />

      <SubHeader title="Usage">
        <Code code={linkifyCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Linkify;
