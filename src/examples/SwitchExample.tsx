import { useState } from 'react';
import { NSwitch } from '../components/NSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Switch:</h1>
      <NSwitch enabled={enabled} setEnabled={setEnabled} />
    </>
  );
};

export default SwitchExample;
