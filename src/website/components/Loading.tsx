import { NLoading } from '@/components/NLoading';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import SubHeader from '../helpers/SubHeader';
import { loadingCode } from '../services/CodeBlocks';

const Badge = () => {
  return (
    <Sidebar title="Loading">
      <div className="mb-5">Displays a loading icon with nice animation.</div>

      <SubHeader title="Demo">
        <NLoading color="red" />
      </SubHeader>

      <SubHeader title="Usage">
        <Code code={loadingCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Badge;
