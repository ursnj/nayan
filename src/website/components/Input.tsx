import React, { useState } from 'react';
import { NInput } from '@/components/NInput';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { inputCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { inputAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Input = () => {
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  return (
    <Sidebar title="Input">
      <Meta title="Input" />
      <div className="mb-5">
        An Input component is a user interface element that allows users to enter data, such as text, numbers, or selections. It typically includes
        various types, such as text fields, checkboxes, radio buttons, and dropdowns, providing flexibility for different data types. Input components
        are essential for forms and interactive applications, enabling users to submit information effectively and efficiently.
      </div>

      <SubHeader title="Demo">
        <NInput
          id="in1"
          type="email"
          label="Email"
          placeholder="Enter email"
          className="mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </SubHeader>

      <Attributes data={inputAttributes} />

      <div className="text-primary mb-5">Note: Along with these params you can also pass all default input params.</div>

      <SubHeader title="Usage">
        <Code code={inputCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Input;
