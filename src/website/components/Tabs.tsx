import { NTabs } from '@/components/NTabs';
import { NTabsContent } from '@/components/NTabsContent';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tabsCode } from '../services/CodeBlocks';

const tabs = ['POSTS', 'SAVED'];

const Tabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Tabs</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <div className="text-xl mb-5"># Demo</div>
      <h1 className="text-text mb-3 text-base text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content1
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content2
        </NTabsContent>
      </NTabs>
      <h1 className="text-text mb-3 mt-5 text-base text-left">Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content3
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content4
        </NTabsContent>
      </NTabs>

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={tabsCode} />
    </Sidebar>
  );
};

export default Tabs;
