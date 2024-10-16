import { NButton } from '@/components/NButton';
import { ButtonSize } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { buttonCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { buttonAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const Button = () => {
  return (
    <Sidebar title="Button">
      <Meta title="Button" />
      <div className="mb-5">
        A Button component is a fundamental UI element that allows users to trigger actions or events, such as submitting a form, opening a dialog, or
        navigating to another page. Buttons are interactive and typically styled to stand out, making it easy for users to identify and interact with
        them. They can come in various types, such as primary, secondary, or disabled, depending on their purpose or state.
      </div>

      <SubHeader title="Demo">
        <NButton size={ButtonSize.XS} disabled className="text-text bg-card border border-border mr-2">
          Button
        </NButton>
        <NButton
          type="submit"
          size={ButtonSize.XS}
          onClick={() => console.log('Button clicked')}
          className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
          Button
        </NButton>
        <NButton
          type="reset"
          size={ButtonSize.SM}
          onClick={() => console.log('Button clicked')}
          className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
          Button
        </NButton>
        <NButton
          size={ButtonSize.MD}
          isLoading={true}
          onClick={() => console.log('Button clicked')}
          className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
          Button
        </NButton>
        <NButton size={ButtonSize.LG} onClick={() => console.log('Button clicked')} className="mr-2">
          Button
        </NButton>
        <NButton size={ButtonSize.LG} isOutline={true} onClick={() => console.log('Button clicked')} className="mr-2">
          Button
        </NButton>
        <NButton
          size={ButtonSize.LG}
          onClick={() => console.log('Button clicked')}
          className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 rounded-full mr-2">
          Button
        </NButton>
      </SubHeader>

      <Attributes data={buttonAttributes} />

      <div className="text-primary mb-5">Note: Along with these params you can also pass all default button params.</div>

      <SubHeader title="Usage">
        <Code code={buttonCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Button;
