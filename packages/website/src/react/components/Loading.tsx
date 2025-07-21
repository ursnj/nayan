import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NLoading } from '@nayan-ui/react';

const Loading = () => {
  return (
    <ComponentWrapper>
      <NLoading className="text-[6px] text-primary" />
    </ComponentWrapper>
  );
};

export default Loading;
