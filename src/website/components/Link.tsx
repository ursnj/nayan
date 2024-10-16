import { NLink } from '@/components/NLink';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { linkCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { linkAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Link = () => {
  return (
    <Sidebar title="Link">
      <Meta title="Link" />
      <div className="mb-5">
        A Link component is a UI element that allows users to navigate from one page or section to another within a web application or website.
        Typically styled as underlined text or buttons, links provide a clear indication of interactivity. They can point to internal or external
        resources and often include features like hover effects or icons to enhance user experience and accessibility.
      </div>

      <SubHeader title="Demo">
        <div className="text-text">
          This is a sample paragraph with some <NLink>Link</NLink>.
        </div>
        <div className="text-text">
          This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
        </div>
      </SubHeader>

      <Attributes data={linkAttributes} />

      <SubHeader title="Usage">
        <Code code={linkCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Link;
