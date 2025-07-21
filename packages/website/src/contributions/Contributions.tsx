import Sidebar from '../helpers/Sidebar';
import Meta from '../helpers/Meta';
import { useLocation } from 'react-router-dom';
import { getMenuItem, isWindowDefined } from '../services/Utils';
import React from 'react';
import { NLinkify } from '@nayan-ui/react';

const Contributions = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta title={component.title} description={component.description} />
      {isWindowDefined() && <NLinkify className="mb-5 leading-relaxed">{component.description}</NLinkify>}
    </Sidebar>
  );
};

export default Contributions;
