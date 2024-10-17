import Sidebar from '../helpers/Sidebar';
import Meta from '@/website/helpers/Meta';
import Code from '../helpers/Code';
import Attributes from '../helpers/Attributes';
import { sitemaperAttributes } from '../services/Attributes';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getMenuItem } from '../services/Utils';

const Sitemaper = () => {
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta title={component.title} description={component.description} />
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

      <Attributes data={sitemaperAttributes} />

      <h2 className="text-xl mb-5">🖥 Future plans</h2>
      <div className="mb-5">Create a web application to automatically generate and submit sitemaps to search engines on a schedule.</div>
      <h2 className="text-xl mb-5">🤝 Contributing</h2>
      <div className="mb-5">
        We welcome all contributions. You can submit any ideas as Pull Requests or as GitHub Issues. If you'd like to improve code, check out the
        Development Instructions and have a good time! :)
      </div>
    </Sidebar>
  );
};

export default Sitemaper;
