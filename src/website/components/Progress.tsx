import React from 'react';
import { NProgress } from '@/components/NProgress';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Progress = () => {
  return (
    <ComponentWrapper>
      <NProgress value={50} />
    </ComponentWrapper>
  );
};

export default Progress;
