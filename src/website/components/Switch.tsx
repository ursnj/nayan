import React, { useState } from 'react';
import { NSwitch } from '@/components/NSwitch';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { switchCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { switchAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Sidebar title="Switch">
      <Meta title="Switch" />
      <div className="mb-5">
        A Switch component is a UI element that allows users to toggle between two states, typically representing an on/off or enabled/disabled
        choice. It is visually represented as a sliding toggle or checkbox and provides immediate feedback when the user interacts with it. Switch
        components are commonly used for settings, preferences, and feature activations in applications, enhancing user experience by simplifying the
        selection process.
      </div>

      <SubHeader title="Demo">
        <NSwitch label="Is Dark Mode" enabled={enabled} onChange={setEnabled} />
      </SubHeader>

      <Attributes data={switchAttributes} />

      <SubHeader title="Usage">
        <Code code={switchCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Switch;
