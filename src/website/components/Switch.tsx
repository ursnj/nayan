import React, { useState } from 'react';
import { NSwitch } from '@/components/NSwitch';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <ComponentWrapper>
      <NSwitch label="Is Dark Mode" enabled={enabled} onChange={setEnabled} />
    </ComponentWrapper>
  );
};

export default Switch;
