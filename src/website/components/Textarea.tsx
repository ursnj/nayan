import { NInput } from '@/components/NInput';
import { NTextarea } from '@/components/NTextarea';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { textareaCode } from '../services/CodeBlocks';

const Textarea = () => {
  const [address, setAddress] = useState('Bangalore, India');

  return (
    <Sidebar title="Textarea">
      <div className="mb-5">Displays a form textarea or a component that looks like a textarea.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NTextarea
        id="teaxtarea"
        label="Address"
        placeholder="Enter address"
        className="mb-3"
        rows={3}
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={textareaCode} />
    </Sidebar>
  );
};

export default Textarea;
