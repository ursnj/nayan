import React from 'react';
import { NLink } from '@/components/NLink';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Link = () => {
  return (
    <ComponentWrapper>
      <div className="text-text">
        This is a sample paragraph with some <NLink>Link</NLink>.
      </div>
      <div className="text-text">
        This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
      </div>
    </ComponentWrapper>
  );
};

export default Link;
