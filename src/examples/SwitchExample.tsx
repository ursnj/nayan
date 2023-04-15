import { useState } from 'react';
import { NSwitch } from '../components/NSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="my-10 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Switch:</h1>
      <NSwitch enabled={enabled} setEnabled={setEnabled} />
    </div>
  );
};

export default SwitchExample;
