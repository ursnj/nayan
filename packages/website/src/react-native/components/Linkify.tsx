import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { isWindowDefined } from '../../services/Utils';
import { NLinkify } from 'nayan';

const Linkify = () => {
  return (
    <ComponentWrapper>
      {isWindowDefined() && <NLinkify>Checkout our new landing page at www.nayanui.com and new email hello@nayanui.com</NLinkify>}
    </ComponentWrapper>
  );
};

export default Linkify;
