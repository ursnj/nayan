import React, { useState } from 'react';
import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import ComponentWrapper from '../helpers/ComponentWrapper';

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
