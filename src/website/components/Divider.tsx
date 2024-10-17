import React from 'react';
import { NDivider } from '@/components/NDivider';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Divider = () => {
  return (
    <ComponentWrapper>
      <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
      <NDivider className="my-3" />
      <h1 className="text-text mb-3 text-lg">Vertical:</h1>
      <NDivider orientation="vertical" className="h-5" />
    </ComponentWrapper>
  );
};

export default Divider;
