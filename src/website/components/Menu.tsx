import React from 'react';
import { NButton } from '@/components/NButton';
import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { NMenuNested } from '@/components/NMenuNested';
import { MenuSize } from '@/components/Types';
import { User } from 'lucide-react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { menuItemAttributes, menuNestedAttributes } from '../services/Attributes';
import Attributes from '../helpers/Attributes';

const Menu = () => {
  return (
    <ComponentWrapper>
      <NMenu align="start" title="My Account" size={MenuSize.LG} trigger={<NButton>Show Menu</NButton>}>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
          <NMenuItem title="Facebook" icon={User} shortcut="⌘P" />
          <NMenuItem title="Twitter" icon={User} shortcut="⌘P" />
        </NMenuNested>
        <NMenuItem title="Settings" icon={User} shortcut="⌘P" separator={true} />
        <NMenuItem title="Logout" icon={User} shortcut="⌘P" />
      </NMenu>

      <Attributes title="Menu Item Attributes" data={menuItemAttributes} />
      <Attributes title="Nested Menu Attributes" data={menuNestedAttributes} />
    </ComponentWrapper>
  );
};

export default Menu;
