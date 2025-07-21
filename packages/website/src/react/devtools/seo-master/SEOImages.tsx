import React from 'react';
import Code from '../../helpers/Code';
import Attributes from './SEOAttributes';
import { faviconAttributes } from '../../services/Attributes';

const SEOImages = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">🕹 Image Assets & Favicon creation</h2>
      <div className="mb-5">
        This will create all the required images and favicons for your website so you no need to remember all the sizes required and edit them
        manually.
      </div>
      <div className="mb-5">We recommend input image is at least of 512X512 resolution for better results.</div>
      <Code language="sh" code={`npx @nayan-ui/cli create images --image ./logo.png`} />
      <div className="mb-5">You can also use the shorter version of this command.</div>
      <Code code={`npx @nayan-ui/cli create images -i ./logo.png`} />
      <Attributes data={faviconAttributes} />
    </div>
  );
};

export default SEOImages;
