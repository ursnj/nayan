import { NJTabs } from '../components/NJTabs';
import { useState } from 'react';

const TabsExample = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Tabs:</h1>
      <NJTabs selected={selected} setSelected={setSelected} />
    </>
  );
};

export default TabsExample;
