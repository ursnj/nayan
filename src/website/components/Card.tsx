import { NCard } from '@/components/NCard';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { cardCode } from '../services/CodeBlocks';

const Badge = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Card</div>
      <div className="mb-5">Displays a card with header, content, and footer.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NCard className="p-3">This is sample card.</NCard>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={cardCode} />
    </Sidebar>
  );
};

export default Badge;
