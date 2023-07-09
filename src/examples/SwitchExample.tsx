import { useState } from 'react';
import { NSwitch } from '@/components/NSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Switch:</h1>
      <NSwitch enabled={enabled} onChange={setEnabled} />
    </div>
  );
};

export default SwitchExample;
