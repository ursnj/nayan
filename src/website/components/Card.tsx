import { NCard } from '@/components/NCard';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { cardCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { cardAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Badge = () => {
  return (
    <Sidebar title="Card">
      <Meta title="Card" />
      <div className="mb-5">Displays a card with content.</div>

      <SubHeader title="Demo">
        <NCard className="p-3">This is sample card.</NCard>
      </SubHeader>

      <Attributes data={cardAttributes} />

      <SubHeader title="Usage">
        <Code code={cardCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Badge;
