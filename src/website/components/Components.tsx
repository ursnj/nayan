import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarItems } from '../services/Utils';
import Sidebar from '@/website/helpers/Sidebar';
import { NCard } from '@/components/NCard';
import { Package } from 'lucide-react';
import Meta from '@/website/helpers/Meta';

const Components = () => {
  return (
    <Sidebar title="Components">
      <Meta title="Components" />
      <div className="mb-5 leading-relaxed">
        Components are reusable building blocks of a user interface that encapsulate a specific piece of functionality or UI design. Each component
        can represent a distinct part of the application, such as buttons, forms, modals, or navigation bars. Components help organize and structure
        code, making it easier to manage, maintain, and scale applications by allowing developers to reuse consistent elements across different parts
        of the project.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {sidebarItems
          .filter(item => item.isComponent)
          .map(item => (
            <Link to={item.link} key={item.link}>
              <NCard className="p-3 flex flex-row h-full">
                <div>
                  <Package className="w-4 h-4 inline mr-3" />
                </div>
                <div>
                  <div className="text-base font-medium pb-1">{item.title}</div>
                  <div className="text-sm">{item.description}</div>
                </div>
              </NCard>
            </Link>
          ))}
      </div>
    </Sidebar>
  );
};

export default Components;
