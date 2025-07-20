import React from 'react';
import { NDivider, NLink } from 'nayan';

const Footer = () => {
  return (
    <section className="bg-card flex flex-col justify-center text">
      <div className="container mx-auto">
        <NDivider />
        <div className="md:flex justify-between items-center py-3">
          <div className="text-sm text text-center md:mb-0 mb-2">All Rights Reserved © {new Date().getFullYear()}</div>
          <div className="text-sm text text-center">Made with ❤️ in India</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
