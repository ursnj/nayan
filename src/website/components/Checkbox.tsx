import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { checkBoxCode } from '../services/CodeBlocks';
import Attributes from '@/website/helpers/Attributes';
import { checkboxAttributes } from '@/website/services/Attributes';
import SubHeader from '@/website/helpers/SubHeader';
import Meta from '@/website/helpers/Meta';

const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Sidebar title="Checkbox">
      <Meta title="Checkbox" />
      <div className="mb-5">
        A Checkbox component is a UI element that allows users to select or deselect one or more options from a list. It typically appears as a small
        square that can be checked (ticked) or unchecked. Checkboxes are often used in forms, settings, or filters where multiple selections are
        needed, and they provide a clear, binary choice for users.
      </div>

      <SubHeader title="Demo">
        <NCheck checked={checked} disabled={false} onChange={(checked: boolean) => setChecked(checked)}>
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NCheck>
      </SubHeader>

      <Attributes data={checkboxAttributes} />

      <SubHeader title="Usage">
        <Code code={checkBoxCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Checkbox;
