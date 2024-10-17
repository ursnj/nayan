import React from 'react';
import { NLinkify } from '@/components/NLinkify';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Linkify = () => {
  return (
    <ComponentWrapper>
      <NLinkify>Checkout our new landing page at nayanui.com and new email hello@nayanui.com</NLinkify>
    </ComponentWrapper>
  );
};

export default Linkify;
