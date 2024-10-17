import Sidebar from '../helpers/Sidebar';
import Meta from '@/website/helpers/Meta';
import { useLocation } from 'react-router-dom';
import { getMenuItem } from '../services/Utils';
import React from 'react';
import { NLinkify } from '../../components/NLinkify';

const Contributions = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta title={component.title} description={component.description} />
      <NLinkify className="mb-5 leading-relaxed">{component.description}</NLinkify>
    </Sidebar>
  );
};

export default Contributions;
