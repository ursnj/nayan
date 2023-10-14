import { NTabs } from '@/components/NTabs';
import { NTabsContent } from '@/components/NTabsContent';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tabsCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { tabsAttributes, tabsContentAttributes } from '@/website/services/Attributes';

const items = ['POSTS', 'SAVED'];

const Tabs = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Sidebar title="Tabs">
      <div className="mb-5">A set of layered sections of content—known as tab panels—that are displayed one at a time.</div>

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
