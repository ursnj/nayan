import { NBadge } from '@/components/NBadge';
import { Size } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { badgeCode } from '../services/CodeBlocks';

const Badge = () => {
  return (
    <Sidebar title="Badge">
      <div className="mb-5">Displays a badge or a component that looks like a badge.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NBadge size={Size.XS} name="Sample" className="text-text bg-card border border-border mr-2" />
      <NBadge size={Size.XS} name="Sample" className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={Size.SM} name="Sample" className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={Size.MD} name="Sample" className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={Size.LG} name="Sample" className="text-red-700 bg-red-300 mr-2" />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={badgeCode} />
    </Sidebar>
  );
};

export default Badge;
