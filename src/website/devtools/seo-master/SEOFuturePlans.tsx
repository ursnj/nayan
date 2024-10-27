import React from 'react';

const SEOFuturePlans = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">🖥 Future plans</h2>
      <ul className="list-disc  list-inside leading-relaxed mb-5">
        <li>
          [x] Create SEO Master CLI tool to generate and validate <strong>sitemaps</strong> efficiently.
        </li>
        <li>
          [x] Create SEO Master CLI tool to generate and validate <strong>robots.txt</strong> efficiently.
        </li>
        <li>
          [x] Create SEO Master CLI tool to generate and validate <strong>meta tags</strong> for your website.
        </li>
        <li>
          [x] Create SEO Master CLI tool to generate <strong>image assets</strong> for your website.
        </li>
        <li>[ ] Support multiple sitemaps if website is bigger than certain limit.</li>
        <li>[ ] Create a web application to automatically generate and submit sitemaps to search engines on a schedule.</li>
      </ul>
    </div>
  );
};

export default SEOFuturePlans;
