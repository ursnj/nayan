import React, { useState } from 'react';
import { NTextarea } from '@/components/NTextarea';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { textareaCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { textareaAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Textarea = () => {
  const [address, setAddress] = useState('Bangalore, India');

  return (
    <Sidebar title="Textarea">
      <Meta title="Textarea" />
      <div className="mb-5">Displays a form textarea or a component that looks like a textarea.</div>

      <SubHeader title="Demo">
        <NTextarea
          id="textarea"
          label="Address"
          placeholder="Enter address"
          className="mb-3"
          rows={3}
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </SubHeader>

      <Attributes data={textareaAttributes} />

      <div className="text-primary mb-5">Note: Along with these params you can also pass all default textarea params.</div>

      <SubHeader title="Usage">
        <Code code={textareaCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Textarea;
