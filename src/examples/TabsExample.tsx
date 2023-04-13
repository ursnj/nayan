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
        <NJTabsContent>Content1</NJTabsContent>
        <NJTabsContent>Content2</NJTabsContent>
      </NJTabs>
      <h1 className="text mb-3 mt-3 text-lg text-left">Tabs Full Width:</h1>
      <NJTabs isFull={true} tabs={tabs} selected={selected} setSelected={setSelected}>
        <NJTabsContent>Content3</NJTabsContent>
        <NJTabsContent>Content4</NJTabsContent>
      </NJTabs>
    </>
  );
};

export default TabsExample;
