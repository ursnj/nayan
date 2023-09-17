import { NButton } from '@/components/NButton';
import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { NMenuNested } from '@/components/NMenuNested';
import { Size } from '@/components/Types';
import { User } from 'lucide-react';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { menuCode } from '../services/CodeBlocks';

const Menu = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Menu</div>
      <div className="mb-5">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NMenu align="start" title="My Account" size={Size.LG} trigger={<NButton>Show Menu</NButton>}>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
          <NMenuItem title="Facebook" icon={User} shortcut="⌘P" />
          <NMenuItem title="Twitter" icon={User} shortcut="⌘P" />
        </NMenuNested>
        <NMenuItem title="Settings" icon={User} shortcut="⌘P" separator={true} />
        <NMenuItem title="Logout" icon={User} shortcut="⌘P" />
      </NMenu>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={menuCode} />
    </Sidebar>
  );
};

export default Menu;
