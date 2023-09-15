import { NButton } from '@/components/NButton';
import { AccordionTypes, AlertTypes, Size } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { buttonCode } from '../services/CodeBlocks';

const Badge = () => {
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Button</div>
      <div className="mb-5">Displays a button or a component that looks like a button.</div>
      <div className="text-xl mb-5">Usage</div>
      <Code code={buttonCode} />
      <div className="text-xl mb-5">Demo</div>
      <NButton size={Size.XS} isDisabled className="text-text bg-card border border-border mr-2">
        Button
      </NButton>
      <NButton
        type="submit"
        size={Size.XS}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
        Button
      </NButton>
      <NButton
        type="reset"
        size={Size.SM}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.MD}
        isLoading={true}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} isOutline={true} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 rounded-full mr-2">
        Button
      </NButton>
    </Sidebar>
  );
};

export default Badge;
