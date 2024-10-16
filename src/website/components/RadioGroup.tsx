import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import { NRadioGroup } from '@/components/NRadioGroup';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { radioGroupCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { radioGroupAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const items = [
  { value: 'startup', label: 'Startup' },
  { value: 'business', label: 'Business' },
  { value: 'enterprise', label: 'Enterprise' }
];

const RadioGroup = () => {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Sidebar title="Radio Group">
      <Meta title="Radio Group" />
      <div className="mb-5">
        A Radio Group component is a UI element that allows users to select one option from a set of mutually exclusive choices. It typically consists
        of multiple radio buttons, where only one button can be selected at a time. Radio groups are commonly used in forms to gather user
        preferences, ensuring a clear and organized way to present options for selection. They enhance user experience by providing a straightforward
        interface for making single-choice decisions.
      </div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-base">Horizontal:</h1>
        <NRadioGroup items={items} selected={selected} onChange={setSelected} />
        <div className="mt-3" />
        <h1 className="text-text mb-3 text-base">Vertical:</h1>
        <NRadioGroup orientation="vertical" items={items} selected={selected} onChange={setSelected} />
      </SubHeader>

      <Attributes data={radioGroupAttributes} />

      <SubHeader title="Usage">
        <Code code={radioGroupCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default RadioGroup;
