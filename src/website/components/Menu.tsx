import React from 'react';
import { NButton } from '@/components/NButton';
import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { NMenuNested } from '@/components/NMenuNested';
import { MenuSize } from '@/components/Types';
import { User } from 'lucide-react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { menuCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { menuAttributes, menuItemAttributes, menuNestedAttributes } from '@/website/services/Attributes';

const Menu = () => {
  return (
    <Sidebar title="Menu">
      <div className="mb-5">Displays a menu to the user — such as a set of actions or functions — triggered by a button.</div>

      <SubHeader title="Demo">
        <NMenu align="start" title="My Account" size={MenuSize.LG} trigger={<NButton>Show Menu</NButton>}>
          <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
          <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
            <NMenuItem title="Facebook" icon={User} shortcut="⌘P" />
            <NMenuItem title="Twitter" icon={User} shortcut="⌘P" />
          </NMenuNested>
          <NMenuItem title="Settings" icon={User} shortcut="⌘P" separator={true} />
          <NMenuItem title="Logout" icon={User} shortcut="⌘P" />
        </NMenu>
      </SubHeader>

      <Attributes title="Menu Attributes" data={menuAttributes} />
      <Attributes title="Menu Item Attributes" data={menuItemAttributes} />
      <Attributes title="Nested Menu Attributes" data={menuNestedAttributes} />

      <SubHeader title="Usage">
        <Code code={menuCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Menu;
