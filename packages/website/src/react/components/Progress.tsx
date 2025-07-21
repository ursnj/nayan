import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NProgress } from 'nayan';

const Progress = () => {
  return (
    <ComponentWrapper>
      <NProgress value={50} label="Sample Progress" showLabel={true} />
    </ComponentWrapper>
  );
};

export default Progress;
