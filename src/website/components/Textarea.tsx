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
      <div className="mb-5">
        A Textarea component is an input field that allows users to enter multi-line text. It provides a larger area for text input compared to a
        standard text input field, making it ideal for comments, feedback, or any scenario where users need to provide detailed information. Textareas
        can be resized, styled, and configured to support features like character limits, placeholders, and auto-resizing to enhance user experience.
      </div>

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
