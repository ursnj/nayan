import { NTabs } from '../components/NTabs';
import { useState } from 'react';
import { NTabsContent } from '../components/NTabsContent';

const tabs = ['Posts', 'Saved'];

const TabsExample = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Tabs:</h1>
      <NTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 py-2 nyn-text-muted">Content1</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content2</NTabsContent>
      </NTabs>
      <h1 className="nyn-text mb-3 mt-5 text-lg text-left">Tabs Full Width:</h1>
      <NTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content3</NTabsContent>
        <NTabsContent className="px-3 p-2 nyn-text-muted">Content4</NTabsContent>
      </NTabs>
    </div>
  );
};

export default TabsExample;
