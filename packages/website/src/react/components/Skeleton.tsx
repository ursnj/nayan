import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NSkeleton } from 'nayan';

const Skeleton = () => {
  return (
    <ComponentWrapper>
      <div className="flex items-center space-x-4">
        <NSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <NSkeleton className="h-4 w-[250px]" />
          <NSkeleton className="h-4 w-[180px]" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Skeleton;
