import { isWindowDefined } from '../../services/Utils';
import { NLinkify } from 'nayan';
import React from 'react';

const SEOContributing = () => {
  return (
    <div>
      <h2 className="text-xl mb-5">🤝 Contributing</h2>
      <div className="mb-5">
        {isWindowDefined() && (
          <NLinkify>
            We encourage and welcome all contributions! Feel free to submit ideas via Pull Requests (https://github.com/ursnj/seo-master/pulls) or
            GitHub Issues (https://github.com/ursnj/seo-master/issues). If you're looking to improve the code, check out our Development Instructions
            and enjoy the process!
          </NLinkify>
        )}
      </div>
    </div>
  );
};

export default SEOContributing;
