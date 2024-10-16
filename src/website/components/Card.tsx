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
      <div className="mb-5">
        A Card component is a versatile UI element used to display content in a structured and visually appealing way. It typically contains related
        information, such as text, images, buttons, and other elements, within a bordered or shadowed container. Cards are often used for presenting
        individual items, like products, articles, or profiles, making the content easy to scan and interact with.
      </div>

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
