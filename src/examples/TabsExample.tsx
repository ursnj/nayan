import { NJTabs } from '../components/NJTabs';
import { useState } from 'react';
import { NJTabsContent } from '../components/NJTabsContent';

const tabs = ['Posts', 'Saved'];

const TabsExample = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Tabs:</h1>
      <NJTabs tabs={tabs} selected={selected} setSelected={setSelected}>
        <NJTabsContent className="px-3 py-2 text">Content1</NJTabsContent>
        <NJTabsContent className="px-3 p-2 text">Content2</NJTabsContent>
      </NJTabs>
      <h1 className="text mb-3 mt-3 text-lg text-left">Tabs Full Width:</h1>
      <NJTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NJTabsContent className="px-3 p-2 text">Content3</NJTabsContent>
        <NJTabsContent className="px-3 p-2 text">Content4</NJTabsContent>
      </NJTabs>
    </>
  );
};

export default TabsExample;
