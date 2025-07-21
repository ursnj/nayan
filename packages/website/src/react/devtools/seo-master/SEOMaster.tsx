import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../helpers/Sidebar';
import Meta from '../../helpers/Meta';
import { getMenuItem } from '../../services/Utils';
import TagsList from '../../tags/TagsList';
import { NLink } from 'nayan';
import SEOSitemaps from './SEOSitemaps';
import SEOFeatures from './SEOFeatures';
import SEOFuturePlans from './SEOFuturePlans';
import SEOContributing from './SEOContributions';
import SEORobots from './SEORobots';
import SEOMetatags from './SEOMetatags';
import SEOImages from './SEOImages';

const SEOMaster = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta
        title="SEO Master - Search Engine Optimization Tools | Free Sitemap Generator | Free Robots.txt Generator"
        description={component.description}
        keywords="sitemap generator, Sitemap validator, free sitemap generator, create XML sitemap, SEO sitemap tool, generate sitemap, XML sitemap, website SEO tool, robots.txt generator, robots.txt validator, meta tags generator, meta tags validator, favicon generator"
      />
      <div className="mb-5 leading-relaxed">
        {component.description}, Checkout <NLink href="https://www.npmjs.com/package/seo-master">SEO Master NPM Library</NLink>
      </div>

      <SEOFeatures />
      <SEOSitemaps />
      <SEORobots />
      <SEOMetatags />
      <SEOImages />
      <SEOFuturePlans />
      <SEOContributing />

      <h2 className="text-xl mb-5">🌈 Tags</h2>
      <TagsList tags={component.tags} />
    </Sidebar>
  );
};

export default SEOMaster;
