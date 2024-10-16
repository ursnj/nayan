import React from 'react';
import { NLoading } from '@/components/NLoading';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import SubHeader from '../helpers/SubHeader';
import { loadingCode } from '../services/CodeBlocks';
import Attributes from '@/website/helpers/Attributes';
import { loadingAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Loading = () => {
  return (
    <Sidebar title="Loading">
      <Meta title="Loading" />
      <div className="mb-5">
        A Loading component is a UI element that indicates to users that a process is ongoing, such as data fetching, page loading, or background
        tasks. It typically features visual indicators like spinners, progress bars, or animated icons to convey that the application is busy and to
        enhance the user experience by preventing confusion or frustration during waiting periods.
      </div>

      <SubHeader title="Demo">
        <NLoading className="text-[6px] text-primary" />
      </SubHeader>

      <Attributes data={loadingAttributes} />

      <SubHeader title="Usage">
        <Code code={loadingCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Loading;
