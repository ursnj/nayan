import React from 'react';
import { NButton } from '@/components/NButton';
import { ButtonSize } from '@/components/Types';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Button = () => {
  return (
    <ComponentWrapper>
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
    </ComponentWrapper>
  );
};

export default Button;
