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
      <div className="mb-5">
        A Badge component is a small UI element used to display a count, status, or label associated with another element, such as an icon or button.
        Badges are commonly used to highlight notifications, messages, or any relevant information in a compact and visually distinct way, often
        appearing as small circles or rectangles with numbers or text.
      </div>

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
