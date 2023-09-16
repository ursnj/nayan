import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { NMenuNested } from '@/components/NMenuNested';
import { Size } from '@/components/Types';
import { User } from 'lucide-react';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { checkBoxCode } from '../services/CodeBlocks';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Checkbox</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NMenu title="My Account" size={Size.LG} trigger={<div className="text-sm font-medium text-red-600">Show Menu</div>}>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
          <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
          <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        </NMenuNested>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" separator={true} />
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
      </NMenu>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={checkBoxCode} />
    </Sidebar>
  );
};

export default Checkbox;
