import Sidebar from '../helpers/Sidebar';
import Meta from '@/website/helpers/Meta';
import Code from '../helpers/Code';
import Attributes from '../helpers/Attributes';
import { sitemaperAttributes } from '../services/Attributes';
import React from 'react';

const Sitemaper = () => {
  return (
    <Sidebar title="Sitemaper">
      <Meta title="Sitemaper" />
      <div className="mb-5 leading-relaxed">
        Sitemaper is a powerful sitemap generator designed to simplify the process of creating accurate and efficient sitemaps for websites. It crawls
        through your site, maps its structure, and generates an optimized sitemap, helping improve SEO and site visibility. With customizable options
        for depth, frequency, and output paths, Sitemaper is a versatile tool for developers and site owners aiming to keep their web presence indexed
        properly.
      </div>
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
