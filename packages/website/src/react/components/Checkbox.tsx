import React, { useState } from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NCheck, NLink } from 'nayan';

const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <ComponentWrapper>
      <NCheck checked={checked} disabled={false} onChange={(checked: boolean) => setChecked(checked)}>
        Sample label for checkbox. accept <NLink> terms</NLink>
      </NCheck>
    </ComponentWrapper>
  );
};

export default Checkbox;
