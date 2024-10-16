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
import Meta from '@/website/helpers/Meta';

const Menu = () => {
  return (
    <Sidebar title="Menu">
      <Meta title="Menu" />
      <div className="mb-5">
        A Dropdown Menu component is a UI element that allows users to select an option from a list that appears when the user clicks or hovers over a
        button or link. This component helps save space on the interface by displaying additional options only when needed. Dropdown menus are
        commonly used for navigation, settings, or forms, enabling users to choose from multiple choices in a clean and organized manner.
      </div>

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
