import { useState } from 'react';
import { NJSwitch } from '../components/NJSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return <NJSwitch enabled={enabled} setEnabled={setEnabled} />;
};

export default SwitchExample;
