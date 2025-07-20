import React, { useState } from 'react';
import { NInput } from '@/components/NInput';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Input = () => {
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  return (
    <ComponentWrapper>
      <NInput id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
    </ComponentWrapper>
  );
};

export default Input;
