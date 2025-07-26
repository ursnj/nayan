import React from 'react';
import { User } from 'lucide-react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { menuItemAttributes, menuNestedAttributes } from '../../services/ReactAttributes';
import Attributes from '../../helpers/Attributes';
import { MenuSize, NButton, NMenu, NMenuItem, NMenuNested } from '@nayan-ui/react';

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
