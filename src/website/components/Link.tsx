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
      <div className="mb-5">A link to show with all of customizations.</div>

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
