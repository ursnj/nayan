import React from 'react';
import Code from '../../helpers/Code';
import Attributes from './SEOAttributes';
import { metatagsValidationAttributes } from '../../services/Attributes';

const SEOMetatags = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">🕹 Meta tags Creation and Validation</h2>
      <div className="text-lg mb-5"># Meta tags creation:</div>
      <div className="mb-5">
        This will create an index.html file with all the required meta tags required for optimised SEO. once its generated you can copy generated
        content and change content as per your needs.
      </div>
      <Code language="sh" code={`npx seo-master create metatags`} />
      <div className="text-lg mb-5"># Meta tags validation:</div>
      <Code code={`npx seo-master validate metatags --website https://www.nayanui.com`} />
      <div className="mb-5">You can also use the shorter version of this command.</div>
      <Code code={`npx seo-master validate metatags -w https://www.nayanui.com`} />
      <Attributes data={metatagsValidationAttributes} />
    </div>
  );
};

export default SEOMetatags;
