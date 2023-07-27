import { useState } from 'react';
import { NTabs } from '@/components/NTabs';
import { NTabsContent } from '@/components/NTabsContent';

const tabs = ['POSTS', 'SAVED'];

const TabsExample = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content1
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content2
        </NTabsContent>
      </NTabs>
      <h1 className="text-text mb-3 mt-5 text-lg text-left">Tabs Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent tab={tabs[0]} className="px-3 py-2 text-text">
          Content3
        </NTabsContent>
        <NTabsContent tab={tabs[1]} className="px-3 py-2 text-text">
          Content4
        </NTabsContent>
      </NTabs>
    </div>
  );
};

export default TabsExample;
