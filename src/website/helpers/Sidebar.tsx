import React, { ReactNode } from 'react';
import Header from '@/website/helpers/Header';
import { NCard } from '@/components/NCard';
import { Package } from 'lucide-react';

interface Props {
  children: ReactNode;
}

const items = [
  { title: 'Installation', link: '/installation', icon: Package },
  { title: 'Components', link: '/components', isHeading: true },
  { title: 'Accordian', link: '/components/accordian', icon: Package },
  { title: 'Alert', link: '/components/alert', icon: Package },
  { title: 'Badge', link: '/components/badge', icon: Package },
  { title: 'Button', link: '/components/button', icon: Package },
  { title: 'Button Group', link: '/components/button-group', icon: Package },
  { title: 'Card', link: '/components/card', icon: Package },
  { title: 'Checkbox', link: '/components/checkbox', icon: Package },
  { title: 'Combo Box', link: '/components/combo-box', icon: Package },
  { title: 'Confirm Alert', link: '/components/confirm-alert', icon: Package },
  { title: 'Dialog', link: '/components/dialog', icon: Package },
  { title: 'Divider', link: '/components/divider', icon: Package },
  { title: 'Infinite Scroll', link: '/components/infinite-scroll', icon: Package },
  { title: 'Input', link: '/components/input', icon: Package },
  { title: 'Link', link: '/components/link', icon: Package },
  { title: 'Linkify', link: '/components/linkify', icon: Package },
  { title: 'Menu', link: '/components/menu', icon: Package },
  { title: 'Menu Nested', link: '/components/menu-nested', icon: Package },
  { title: 'Popover', link: '/components/popover', icon: Package },
  { title: 'Progress', link: '/components/progress', icon: Package },
  { title: 'Radio Group', link: '/components/radio-group', icon: Package },
  { title: 'Select', link: '/components/select', icon: Package },
  { title: 'Sheet', link: '/components/sheet', icon: Package },
  { title: 'Skelton', link: '/components/skelton', icon: Package },
  { title: 'Slider', link: '/components/slider', icon: Package },
  { title: 'Switch', link: '/components/switch', icon: Package },
  { title: 'Tabs', link: '/components/tabs', icon: Package },
  { title: 'Text', link: '/components/text', icon: Package },
  { title: 'Textarea', link: '/components/textarea', icon: Package },
  { title: 'Theme', link: '/components/theme', icon: Package },
  { title: 'Tooltip', link: '/components/tooltip', icon: Package },
  { title: 'Hooks', link: '/hooks', isHeading: true },
  { title: 'Local Storge', link: '/components/local-storage', icon: Package },
  { title: 'Toast', link: '/components/toast', icon: Package }
];

const Sidebar = (props: Props) => {
  return (
    <div className="container mx-auto pt-3 mb-3">
      <div className="flex flex-col md:flex-row">
        <div className="w-[220px] mr-3">
          {items.map(item => {
            const Icon = item.icon as any;
            return (
              <>
                {!item.isHeading && (
                  <div className="rounded cursor-pointer hover:bg-border p-1.5 px-3 flex items-center" key={item.link}>
                    <Icon className="w-4 h-4 inline mr-3" />
                    <span>{item.title}</span>
                  </div>
                )}
                {!!item.isHeading && (
                  <div className="text-lg p-2" key={item.link}>
                    {item.title}
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
