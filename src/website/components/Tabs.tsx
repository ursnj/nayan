import { NTabs } from '@/components/NTabs';
import { NTabsContent } from '@/components/NTabsContent';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tabsCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { tabsAttributes, tabsContentAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const items = ['POSTS', 'SAVED'];

const Tabs = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Sidebar title="Tabs">
      <Meta title="Tabs" />
      <div className="mb-5">
        A Tabs component is a UI element that allows users to switch between different views or sections of content within the same interface.
        Organized as a series of labeled tabs, this component enhances navigation by displaying only one section at a time, helping to reduce clutter
        and improve user experience. Users can easily access various related content or features by clicking on the respective tabs, making it ideal
        for dashboards, settings pages, or any multi-section layout.
      </div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-base text-left">Tabs:</h1>
        <NTabs items={items} selected={selected} onChange={setSelected}>
          <NTabsContent item={items[0]} className="px-3 py-2 text-text">
            Content1
          </NTabsContent>
          <NTabsContent item={items[1]} className="px-3 py-2 text-text">
            Content2
          </NTabsContent>
        </NTabs>
        <h1 className="text-text mb-3 mt-5 text-base text-left">Full Width:</h1>
        <NTabs isFull={true} items={items} selected={selected} onChange={setSelected}>
          <NTabsContent item={items[0]} className="px-3 py-2 text-text">
            Content3
          </NTabsContent>
          <NTabsContent item={items[1]} className="px-3 py-2 text-text">
            Content4
          </NTabsContent>
        </NTabs>
      </SubHeader>

      <Attributes title="Tabs Attributes" data={tabsAttributes} />
      <Attributes title="Tabs Content Attributes" data={tabsContentAttributes} />

      <SubHeader title="Usage">
        <Code code={tabsCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Tabs;
