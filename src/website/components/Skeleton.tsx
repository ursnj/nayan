import React from 'react';
import { NSkeleton } from '@/components/NSkeleton';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { skeletonCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { skeletonAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Skeleton = () => {
  return (
    <Sidebar title="Skeleton">
      <Meta title="Skeleton" />
      <div className="mb-5">Use to show a placeholder while content is loading.</div>

      <SubHeader title="Demo">
        <div className="flex items-center space-x-4">
          <NSkeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <NSkeleton className="h-4 w-[250px]" />
            <NSkeleton className="h-4 w-[180px]" />
          </div>
        </div>
      </SubHeader>

      <Attributes data={skeletonAttributes} />

      <SubHeader title="Usage">
        <Code code={skeletonCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Skeleton;
