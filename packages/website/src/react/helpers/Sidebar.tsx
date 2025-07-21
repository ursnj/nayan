import React, { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sidebarItems } from '../services/Utils';
import { NCard } from 'nayan';

interface Props {
  title?: string;
  children: ReactNode;
}

const Sidebar = (props: Props) => {
  return (
    <div className="container mx-auto pt-3 mb-3">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden sm:block col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3">
          <NCard className="sticky top-[70px] h-[calc(100vh-82px)] overflow-y-auto">
            {sidebarItems.map(item => {
              const Icon = item.icon as any;
              return (
                <div key={item.link}>
                  {!item.isHeading && (
                    <NavLink to={item.link}>
                      <div className="cursor-pointer hover:bg-border p-1.5 px-3 flex items-center">
                        <Icon className="w-4 h-4 inline mr-3" />
                        <span>{item.title}</span>
                      </div>
                    </NavLink>
                  )}
                  {!!item.isHeading && <div className="text-lg p-2">{item.title}</div>}
                </div>
              );
            })}
          </NCard>
        </div>
        <div className="content col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-9 pt-2">
          {props.title && <h1 className="text-2xl mb-5">{props.title}</h1>}
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
