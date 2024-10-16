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
      <div className="mb-5">
        A Skeleton component is a placeholder UI element that represents the layout of content before it loads. It typically features a grey or
        light-colored shape mimicking the structure of the actual content (such as text blocks, images, or buttons) to indicate that loading is in
        progress. Skeleton components enhance user experience by providing a visual cue that content is being fetched, reducing perceived loading
        times and preventing layout shifts.
      </div>

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
