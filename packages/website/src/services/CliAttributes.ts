export const sitemapsCreateAttributes = [
  { name: 'Website URL', attribute: '--website / -w', type: 'string', default: '', details: 'Pass website base URL to start crawling.' },
  {
    name: 'Replacement Website',
    attribute: '--replacer / -r',
    type: 'string',
    default: '',
    details: 'Pass replacement URL to replace crawled url, this will be mostly useful to crawl localhost and replace it with original URL..'
  },
  {
    name: 'Crawling depth',
    attribute: '--depth / -d',
    type: 'number',
    default: '10',
    details: 'Pass depth to let the generator know how depth it need to crawl.'
  },
  {
    name: 'Change frequency',
    attribute: '--changefreq / -f',
    type: 'string',
    default: 'daily',
    details:
      'Pass change frequency to let the generator know how frequently your content change, possible options are always, hourly, daily, weekly, monthly, yearly, never.'
  },
  {
    name: 'Output',
    attribute: '--output / -o',
    type: 'string',
    default: './sitemap.xml',
    details: 'Pass output to let the generator know where to keep generated sitemap.'
  }
];
export const sitemapsValidationAttributes = [
  {
    name: 'Input sitemap',
    attribute: '--input / -i',
    type: 'string',
    default: './sitemap.xml',
    details: 'Pass input sitemap to let the generator know where to find and validate sitemap.'
  },
  {
    name: 'Is Remote',
    attribute: '--isremote / -ir',
    type: 'boolean',
    default: 'false',
    details: 'Pass isremote true / false to the tool to know if its a local file or remote URL.'
  }
];

export const robotsCreateAttributes = [
  {
    name: 'Allowed paths',
    attribute: '--allowed / -a',
    type: 'string',
    default: '',
    details: 'Pass allowed links to allow search engines to crawling.'
  },
  {
    name: 'Disallowed paths',
    attribute: '--disallowed / -d',
    type: 'string',
    default: '',
    details: 'Pass dis allowed links to restrict search engines from crawling.'
  },
  { name: 'Sitemap', attribute: '--sitemap / -s', type: 'string', default: '', details: 'Pass site map URL of your website.' },
  {
    name: 'Output',
    attribute: '--output / -o',
    type: 'string',
    default: './sitemap.xml',
    details: 'Pass output to let the generator know where to keep generated sitemap.'
  }
];
export const robotsValidationAttributes = [
  {
    name: 'Input Robots.txt',
    attribute: '--input / -i',
    type: 'string',
    default: './robots.txt',
    details: 'Pass input robots.txt to let the generator know where to find and validate robots.txt.'
  },
  {
    name: 'Is Remote',
    attribute: '--isremote / -ir',
    type: 'boolean',
    default: 'false',
    details: 'Pass isremote true / false to the tool to know if its a local file or remote URL.'
  }
];
