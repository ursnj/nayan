import React from 'react';
import { NLoading } from '@/components/NLoading';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Loading = () => {
  return (
    <ComponentWrapper>
      <NLoading className="text-[6px] text-primary" />
    </ComponentWrapper>
  );
};

export default Loading;
