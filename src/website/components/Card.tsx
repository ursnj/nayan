import React from 'react';
import { NCard } from '@/components/NCard';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Badge = () => {
  return (
    <ComponentWrapper>
      <NCard className="p-3">This is sample card.</NCard>
    </ComponentWrapper>
  );
};

export default Badge;
