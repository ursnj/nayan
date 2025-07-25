import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NProgress } from '@nayan-ui/react';

const Progress = () => {
  return (
    <ComponentWrapper>
      <NProgress value={50} label="Sample Progress" showLabel={true} />
    </ComponentWrapper>
  );
};

export default Progress;
