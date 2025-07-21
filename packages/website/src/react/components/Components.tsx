import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMenuItem, sidebarItems } from '../../services/Utils';
import Sidebar from '../../helpers/Sidebar';
import Meta from '../../helpers/Meta';
import { NCard } from '@nayan-ui/react';

const Components = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta title={component.title} description={component.description} />
      <div className="mb-5 leading-relaxed">{component.description}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {sidebarItems
          .filter(item => item.isComponent)
          .map(item => {
            const Icon = item.icon as any;
            return (
              <Link to={item.link} key={item.link}>
                <NCard className="p-3 h-full">
                  <div className="flex flex-row items-center mb-1">
                    <Icon className="w-4 h-4 inline mr-3 text-primary" />
                    <div className="text-base font-medium">{item.title}</div>
                  </div>
                  <div className="text-sm line-clamp-6">{item.description}</div>
                </NCard>
              </Link>
            );
          })}
      </div>
    </Sidebar>
  );
};

export default Components;
