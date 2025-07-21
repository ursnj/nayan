import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NDivider } from 'nayan';

const Divider = () => {
  return (
    <ComponentWrapper>
      <h1 className="text-text mb-3 text-lg">Horizontal:</h1>
      <NDivider className="my-3" />
      <h1 className="text-text mb-3 text-lg">Vertical:</h1>
      <NDivider orientation="vertical" className="h-5" />
      <NDivider orientation="horizontal" className="h-5">
        OR
      </NDivider>
    </ComponentWrapper>
  );
};

export default Divider;
