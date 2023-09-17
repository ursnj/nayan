import React, { ReactNode } from 'react';
import Header from '@/website/helpers/Header';
import { NCard } from '@/components/NCard';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const items = [
  { title: 'Get Started', link: '/get-started', isHeading: true },
  { title: 'Installation', link: '/installation', icon: Package },
  { title: 'Components', link: '/components', isHeading: true },
  { title: 'Accordion', link: '/components/accordion', icon: Package },
  { title: 'Alert', link: '/components/alert', icon: Package },
  { title: 'Badge', link: '/components/badge', icon: Package },
  { title: 'Button', link: '/components/button', icon: Package },
  { title: 'Button Group', link: '/components/button-group', icon: Package },
  { title: 'Card', link: '/components/card', icon: Package },
  { title: 'Checkbox', link: '/components/checkbox', icon: Package },
  { title: 'Combo Box', link: '/components/combobox', icon: Package },
  { title: 'Confirm Alert', link: '/components/confirm-alert', icon: Package },
  { title: 'Dialog', link: '/components/dialog', icon: Package },
  { title: 'Divider', link: '/components/divider', icon: Package },
  { title: 'Infinite Scroll', link: '/components/infinite-scroll', icon: Package },
  { title: 'Input', link: '/components/input', icon: Package },
  { title: 'Link', link: '/components/link', icon: Package },
  { title: 'Linkify', link: '/components/linkify', icon: Package },
  { title: 'Menu', link: '/components/menu', icon: Package },
  { title: 'Popover', link: '/components/popover', icon: Package },
  { title: 'Progress', link: '/components/progress', icon: Package },
  { title: 'Radio Group', link: '/components/radio-group', icon: Package },
  { title: 'Select', link: '/components/select', icon: Package },
  { title: 'Sheet', link: '/components/sheet', icon: Package },
  { title: 'Skeleton', link: '/components/skeleton', icon: Package },
  { title: 'Slider', link: '/components/slider', icon: Package },
  { title: 'Switch', link: '/components/switch', icon: Package },
  { title: 'Tabs', link: '/components/tabs', icon: Package },
  { title: 'Textarea', link: '/components/textarea', icon: Package },
  { title: 'Toast', link: '/components/toast', icon: Package },
  { title: 'Tooltip', link: '/components/tooltip', icon: Package },
  { title: 'More Guides', link: '/guides', isHeading: true },
  { title: 'Contribution', link: '/contribution', icon: Package }
];

const Sidebar = (props: Props) => {
  return (
    <div className="container mx-auto pt-3 mb-3">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3">
          <div className="sticky top-[70px] h-[calc(100vh-80px)] overflow-y-auto">
            {items.map(item => {
              const Icon = item.icon as any;
              return (
                <>
                  {!item.isHeading && (
                    <Link to={item.link} key={item.link}>
                      <div className="rounded cursor-pointer hover:bg-border p-1.5 px-3 flex items-center">
                        <Icon className="w-4 h-4 inline mr-3" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
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
        </div>
        <div className="content col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-9 pt-2">{props.children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
