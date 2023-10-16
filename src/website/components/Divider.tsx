import { NDivider } from '@/components/NDivider';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { dividerCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { dividerAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Divider = () => {
  return (
    <Sidebar title="Divider">
      <Meta title="Divider" />
      <div className="mb-5">Visually or semantically separates content.</div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
        <NDivider className="my-3" />
        <h1 className="text-text mb-3 text-lg">Vertical:</h1>
        <NDivider orientation="vertical" className="h-5" />
      </SubHeader>

      <Attributes data={dividerAttributes} />

      <SubHeader title="Usage">
        <Code code={dividerCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Divider;
