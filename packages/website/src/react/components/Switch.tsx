import React, { useState } from 'react';
import ComponentWrapper from '../../helpers/ComponentWrapper';
import { NSwitch } from 'nayan';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <ComponentWrapper>
      <NSwitch label="Is Dark Mode" enabled={enabled} onChange={setEnabled} />
    </ComponentWrapper>
  );
};

export default Switch;
