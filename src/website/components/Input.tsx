import { NInput } from '@/components/NInput';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { inputCode } from '../services/CodeBlocks';

const Input = () => {
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  return (
    <Sidebar>
      <div className="text-2xl mb-5">Input</div>
      <div className="mb-5">Displays a form input field or a component that looks like an input field.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NInput id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={inputCode} />
    </Sidebar>
  );
};

export default Input;
