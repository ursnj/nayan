import { NMenu } from '@/components/NMenu';
import { NMenuItem } from '@/components/NMenuItem';
import { Size } from '@/components/Types';
import { User } from 'lucide-react';
import { NMenuNested } from '@/components/NMenuNested';

const MenuExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NMenu title="My Account" size={Size.LG} trigger={<div className="text-sm font-medium text-red-600">Open Menu</div>}>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" separator={true} />
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        <NMenuNested trigger={<NMenuItem title="Share" icon={User} className="p-0" />}>
          <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
          <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
        </NMenuNested>
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" separator={true} />
        <NMenuItem title="Profile" icon={User} shortcut="⌘P" />
      </NMenu>
    </div>
  );
};

export default MenuExample;
