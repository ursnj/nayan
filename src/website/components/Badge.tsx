import { NBadge } from '@/components/NBadge';
import { BadgeSize } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { badgeCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { badgeAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Badge = () => {
  return (
    <Sidebar title="Badge">
      <Meta title="Badge" />
      <div className="mb-5">Displays a badge or a component that looks like a badge.</div>

      <SubHeader title="Demo">
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
      </SubHeader>

      <Attributes data={badgeAttributes} />

      <SubHeader title="Usage">
        <Code code={badgeCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Badge;
