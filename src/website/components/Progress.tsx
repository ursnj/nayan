import React from 'react';
import { NProgress } from '@/components/NProgress';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { progressCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { progressAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Progress = () => {
  return (
    <Sidebar title="Progress">
      <Meta title="Progress" />
      <div className="mb-5">
        A Progress component visually indicates the completion status of a task or process. It typically consists of a progress bar that fills up as
        the task progresses, providing users with a clear and immediate understanding of how much of the task is completed and how much remains. This
        component is commonly used in forms, uploads, downloads, and loading states to enhance user experience by managing expectations and keeping
        users informed.
      </div>

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
