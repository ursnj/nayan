import React, { useState } from 'react';
import { NTextarea } from '@/components/NTextarea';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Textarea = () => {
  const [address, setAddress] = useState('Bangalore, India');

  return (
    <ComponentWrapper>
      <NTextarea
        id="textarea"
        label="Address"
        placeholder="Enter address"
        className="mb-3"
        rows={3}
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
    </ComponentWrapper>
  );
};

export default Textarea;
