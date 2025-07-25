import React from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { BadgeSize, NBadge } from '@nayan-ui/react';

const Badge = () => {
  return (
    <ComponentWrapper>
      <NBadge size={BadgeSize.XS} className="text-text bg-card border border-border mr-2">
        Sample
      </NBadge>
      <NBadge size={BadgeSize.XS} className="text-blue-700 bg-blue-300 mr-2">
        Sample
      </NBadge>
      <NBadge size={BadgeSize.SM} className="text-green-700 bg-green-300 mr-2">
        Sample
      </NBadge>
      <NBadge size={BadgeSize.MD} className="text-yellow-700 bg-yellow-300 mr-2">
        Sample
      </NBadge>
      <NBadge size={BadgeSize.LG} className="text-red-700 bg-red-300 mr-2">
        Sample
      </NBadge>
    </ComponentWrapper>
  );
};

export default Badge;
