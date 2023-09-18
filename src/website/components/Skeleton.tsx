import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import { NSkeleton } from '@/components/NSkeleton';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { skeletonCode } from '../services/CodeBlocks';

const Skeleton = () => {
  return (
    <Sidebar title="Skeleton">
      <div className="mb-5">Use to show a placeholder while content is loading.</div>

      <div className="text-xl mb-5"># Demo</div>
      <div className="flex items-center space-x-4">
        <NSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <NSkeleton className="h-4 w-[250px]" />
          <NSkeleton className="h-4 w-[180px]" />
        </div>
      </div>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={skeletonCode} />
    </Sidebar>
  );
};

export default Skeleton;
