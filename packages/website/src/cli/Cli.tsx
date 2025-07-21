import React from 'react';
import { useLocation } from 'react-router-dom';
import { NLink } from '@nayan-ui/react';
import Sidebar from '../helpers/Sidebar';
import Meta from '../helpers/Meta';
import TagsList from '../tags/TagsList';
import Robots from './Robots';
import Sitemaps from './Sitemaps';
import Features from './Features';
import { getMenuItem } from '../services/Utils';

const Cli = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title="CLI">
      <Meta
        title="SEO Master - Search Engine Optimization Tools | Free Sitemap Generator | Free Robots.txt Generator"
        description={component.description}
        keywords="sitemap generator, Sitemap validator, free sitemap generator, create XML sitemap, SEO sitemap tool, generate sitemap, XML sitemap, website SEO tool, robots.txt generator, robots.txt validator, meta tags generator, meta tags validator, favicon generator"
      />
      <div className="mb-5 leading-relaxed">
        {component.description}, Checkout <NLink href="https://www.npmjs.com/package/@nayan-ui/cli">SEO Master NPM Library</NLink>
      </div>

      <Features />
      <Sitemaps />
      <Robots />

      <h2 className="text-xl mb-5">🌈 Tags</h2>
      <TagsList tags={component.tags} />
    </Sidebar>
  );
};

export default Cli;
