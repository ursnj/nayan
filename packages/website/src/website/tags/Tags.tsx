import Meta from '../helpers/Meta';
import Sidebar from '../helpers/Sidebar';
import React from 'react';
import { sidebarItems } from '../services/Utils';
import TagsList from './TagsList';

const Tags = () => {
  return (
    <Sidebar title="Component Tags">
      <Meta title="Component Tags" />
      <div className="mb-5 leading-relaxed">
        Our React component library offers a variety of customizable and reusable UI elements. These tags include interactive components such as
        buttons, forms, modals, accordions, and more, designed for seamless integration into your React applications. Each element is built with
        flexibility and performance in mind, enabling you to enhance user experience efficiently.
      </div>
      {sidebarItems
        .filter(item => item.isComponent)
        .map((component: any) => {
          return (
            <div key={component.title}>
              <div className="flex flex-row justify-between items-center mb-3 py-2">
                <h2 className="text-lg">{component.title} Tags</h2>
              </div>
              <div className="mb-5 leading-relaxed">{component.description}</div>
              <TagsList tags={component.tags || []} />
            </div>
          );
        })}
    </Sidebar>
  );
};

export default Tags;
