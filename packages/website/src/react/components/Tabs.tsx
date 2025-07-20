import React, { useState } from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NTabs, NTabsContent } from 'nayan';

const items = ['POSTS', 'SAVED'];

const Tabs = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <ComponentWrapper>
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
    </ComponentWrapper>
  );
};

export default Tabs;
