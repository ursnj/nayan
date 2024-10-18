import Sidebar from '../helpers/Sidebar';
import Meta from '@/website/helpers/Meta';
import Code from '../helpers/Code';
import Attributes from '../helpers/Attributes';
import { sitemaperAttributes } from '../services/Attributes';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getMenuItem, isWindowDefined } from '../services/Utils';
import TagsList from '../tags/TagsList';
import { NLinkify } from '../../components/NLinkify';

const Sitemaper = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta
        title="Sitemaper - Free Sitemap Generator | Create XML Sitemaps for SEO"
        description="Easily create XML sitemaps to boost your SEO. Generate sitemaps for free and ensure search engines properly index your website."
        keywords="sitemap generator, free sitemap generator, create XML sitemap, SEO sitemap tool, generate sitemap, XML sitemap, website SEO tool"
      />
      <div className="mb-5 leading-relaxed">{component.description}</div>
      <h2 className="text-xl mb-5">✨ Features</h2>
      <ul className="list-disc list-inside leading-relaxed mb-5">
        <li>⌨️ Framework Agnostic Integration.</li>
        <li>🌈 Automatic Sitemap Generation.</li>
        <li>🛡 Supports Large Websites.</li>
        <li>🌍 Domain Specific Crawling.</li>
        <li>⚙️ Customizable Crawling Depth.</li>
        <li>📦 Customizable Output Path.</li>
        <li>🎨 Flexible Change Frequency.</li>
      </ul>
      <h2 className="text-xl mb-5">🕹 Usage</h2>
      <Code language="bash" code={`npx sitemaper --website https://www.nayanui.com --depth 10 --output ./sitemap.xml --changefreq daily`} />
      <div className="mb-5">You can also use the shorter version of this command.</div>
      <Code language="bash" code={`npx sitemaper -w https://www.nayanui.com -d 10 -o ./sitemap.xml -f daily`} />
      <div className="mb-5">You can also integrate Sitemaper with your localhost</div>
      <Code language="bash" code={`npx sitemaper -w http://localhost:3000 -r https://www.nayanui.com -d 10 -o ./sitemap.xml -f daily`} />

      <Attributes data={sitemaperAttributes} />

      <h2 className="text-xl mb-5">🖥 Future plans</h2>
      <div className="mb-5">Create a web application to automatically generate and submit sitemaps to search engines on a schedule.</div>
      <h2 className="text-xl mb-5">🤝 Contributing</h2>
      {isWindowDefined() && (
        <NLinkify className="mb-5">
          We encourage and welcome all contributions! Feel free to submit ideas via Pull Requests (https://github.com/ursnj/sitemaper/pulls) or GitHub
          Issues (https://github.com/ursnj/sitemaper/issues). If you're looking to improve the code, check out our Development Instructions and enjoy
          the process!
        </NLinkify>
      )}

      <h2 className="text-xl mb-5">🌈 Tags</h2>
      <TagsList tags={component.tags} />
    </Sidebar>
  );
};

export default Sitemaper;
