import React from 'react';
import { NLinkify } from '@/components/NLinkify';
import ComponentWrapper from '../helpers/ComponentWrapper';

const Linkify = () => {
  return (
    <ComponentWrapper>
      {typeof window !== 'undefined' && <NLinkify>Checkout our new landing page at www.nayanui.com and new email hello@nayanui.com</NLinkify>}
    </ComponentWrapper>
  );
};

export default Linkify;
