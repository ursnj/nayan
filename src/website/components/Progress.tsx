import React from 'react';
import { NProgress } from '@/components/NProgress';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { progressCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { progressAttributes } from '@/website/services/Attributes';

const Progress = () => {
  return (
    <Sidebar title="Progress">
      <div className="mb-5">Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</div>

      <SubHeader title="Demo">
        <NProgress value={50} />
      </SubHeader>

      <Attributes data={progressAttributes} />

      <SubHeader title="Usage">
        <Code code={progressCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Progress;
