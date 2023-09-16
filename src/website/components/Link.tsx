import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { linkCode } from '../services/CodeBlocks';

const Link = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Link</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <div className="text-text">
        This is a sample paragraph with some <NLink>Link</NLink>.
      </div>
      <div className="text-text">
        This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
      </div>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={linkCode} />
    </Sidebar>
  );
};

export default Link;
